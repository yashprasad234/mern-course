const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.headers;

  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    next();
  } else {
    res.status(403).json({ message: "Admin authentication failed" });
  }
};

const userAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    req.user = user; // Add user object to the request
    next();
  } else {
    res.status(403).json({ message: "User authentication failed" });
  }
};

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up adminz
  const { username, password } = req.body;
  const existingAdmin = ADMINS.find(
    (admin) => admin.username === username && admin.password === password
  );
  if (existingAdmin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    ADMINS.push({ username, password });
    res.json({ message: "Admin created successfully" });
  }
});

app.post("/admin/login", adminAuthentication, (req, res) => {
  // logic to log in admind
  res.json({ message: "Logged in successfully" });
});

app.post("/admin/courses", adminAuthentication, (req, res) => {
  // logic to create a course
  const course = req.body;
  if (!course.title || !course.description) {
    res.status(411).json({ message: "Title/Description missing" });
  }
  course.courseId = COURSES.length + 1;
  COURSES.push(course);
  res.json({
    message: "Course created successfully",
    courseId: course.courseId,
  });
});

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  // logic to edit a course
  const courseId = +req.params.courseId;
  const course = COURSES.find((course) => course.courseId === courseId);
  if (course) {
    Object.assign(course, req.body);
    res.json({ message: "Course updated successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/admin/courses", adminAuthentication, (req, res) => {
  // logic to get all courses
  res.json({ courses: COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const { username, password } = req.body;
  const existingUser = USERS.find(
    (user) => user.username === username && user.password === password
  );
  if (existingUser) {
    res.status(403).json({ message: "User already exists" });
  } else {
    USERS.push({ username, password, purchasedCourses: [] });
    res.json({ message: "User created successfully" });
  }
});

app.post("/users/login", userAuthentication, (req, res) => {
  // logic to log in user
  res.json({ message: "Logged in successfully" });
});

app.get("/users/courses", userAuthentication, (req, res) => {
  // logic to list all courses
  res.json({
    courses: COURSES.filter((course) => course.published === true),
  });
});

app.post("/users/courses/:courseId", userAuthentication, (req, res) => {
  // logic to purchase a course
  const courseId = +req.params.courseId;
  const availableCourse = COURSES.find(
    (course) => course.published === true && course.courseId === courseId
  );
  if (availableCourse) {
    user.purchasedCourses.push(availableCourse);
    res.json({ message: "Course purchased successfully" });
  } else {
    res.status(403).json({ message: "Course is not available" });
  }
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
  const user = authenticateUser(req);
  if (user) {
    res.json({
      purchasedCourses: user.purchasedCourses,
    });
  } else {
    res.status(403).json({ message: "User authentication failed" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
