const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

let id = 1;

try {
  ADMINS = fs.readFile("admins.json", "utf-8");
  USERS = fs.readFile("users.json", "utf-8");
  COURSES = fs.readFile("courses.json", "utf-8");
} catch {
  ADMINS = [];
  USERS = [];
  COURSES = [];
}

const SECRET = "S3cret3";

const generateJwt = (user, role) => {
  const payload = { username: user.username, role: role };
  return jwt.sign(payload, SECRET + role, { expiresIn: "1h" });
};

const authenticateJwtAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET + "admin", (err, username) => {
      if (err) {
        res.sendStatus(403);
      }
      req.user = username;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

const authenticateJwtUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET + "user", (err, username) => {
      if (err) {
        res.sendStatus(403);
      }
      req.user = username;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

console.log(ADMINS);

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  const existingAdmin = ADMINS.find((a) => a.username === admin.username);
  if (existingAdmin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    ADMINS.push(admin);
    fs.writeFileSync("admins.json", JSON.stringify(ADMINS));
    const token = generateJwt(admin, "admin");
    res.json({ message: "Admin created successfully", token });
  }
});

app.post("/admin/login", (req, res) => {
  // logic to log in
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    const token = generateJwt(admin, "admin");
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.post("/admin/courses", authenticateJwtAdmin, (req, res) => {
  // logic to create a course
  const course = req.body;
  course.id = id;
  id++;
  COURSES.push(course);
  fs.writeFileSync("courses.json", JSON.stringify(COURSES));
  res.json({ message: "Course created successfully", courseId: course.id });
});

app.put("/admin/courses/:courseId", authenticateJwtAdmin, (req, res) => {
  // logic to edit a course
  const course = COURSES.find((c) => c.id === +req.params.courseId);
  if (course) {
    Object.assign(course, req.body);
    fs.writeFileSync("courses.json", JSON.stringify(COURSES));
    res.json({ message: "Course updated successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/admin/courses", authenticateJwtAdmin, (req, res) => {
  // logic to get all courses
  res.json({ courses: COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const user = req.body;
  const existingUser = USERS.find((u) => u.username === user.username);
  if (existingUser) {
    res.status(403).json({ message: "User already exists" });
  } else {
    USERS.push(user);
    fs.writeFileSync("users.json", JSON.stringify(USERS));
    const token = generateJwt(user, "user");
    res.json({ message: "User created successfully", token });
  }
});

app.post("/users/login", (req, res) => {
  // logic to log in user
  const { username, password } = req.headers;
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = generateJwt(user, "user");
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.get("/users/courses", authenticateJwtUser, (req, res) => {
  // logic to list all courses
  res.json({ courses: COURSES.filter((c) => c.published === true) });
});

app.post("/users/courses/:courseId", authenticateJwtUser, (req, res) => {
  // logic to purchase a course
  const course = COURSES.find((c) => c.id === +req.params.courseId);
  if (course) {
    const user = USERS.find((u) => u.username === req.user.username);
    if (user) {
      if (!user.purchasedCourses) user.purchasedCourses = [];
      user.purchasedCourses.push(course);
      fs.writeFileSync("users.json", JSON.stringify(USERS));
    } else {
      res.status(403).json({ message: "User not found" });
    }
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/users/purchasedCourses", authenticateJwtUser, (req, res) => {
  // logic to view purchased courses
  const user = USERS.find((u) => u.username === req.user.username);
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.status(403).json({ message: "User not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
