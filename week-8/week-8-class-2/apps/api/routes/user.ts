import jwt from "jsonwebtoken";
import express from "express";
import { authenticateJwt, SECRET } from "../middleware/";
import { User, Course } from "../db/";

const router = express.Router();

router.get("/me", authenticateJwt, async (req, res) => {
  const user = await User.findOne({ _id: req.headers["userId"] });
  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(403).json({ message: "User not logged in" });
  }
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "User created successfully", token });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.headers;
  const userExists = await User.findOne({ username });
  if (userExists) {
    const correctUser = await User.findOne({ username, password });
    if (correctUser) {
      const token = jwt.sign({ id: correctUser._id }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Incorrect username or password" });
    }
  } else {
    res.status(403).json({ message: "User doesn't exist" });
  }
});

router.get("/courses", authenticateJwt, async (req, res) => {
  const courses = await Course.find({ published: true });
  res.json({ courses });
});

router.get("/courses/:courseId", authenticateJwt, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  if (course?.published) {
    res.json({ course });
  } else {
    res.status(401).json({ message: "This course isn't available yet." });
  }
});

router.put("/courses/:courseId", authenticateJwt, async (req, res) => {
  const user = await User.findById(req.headers["userId"]);
  if (user) {
    const course = await Course.findOne({
      _id: req.params.courseId,
      published: true,
    });
    if (course) {
      user.purchasedCourses.push(course._id);
      await user.save();
      res.json({ message: "Course purchased successfully" });
    } else {
      res.status(403).json({ message: "This course isn't available yet" });
    }
  } else {
    res
      .status(403)
      .json({ message: "Failed to purchase course, user isn't logged in" });
  }
});

router.get("/purchasedCourses", authenticateJwt, async (req, res) => {
  const user = await User.findOne({ _id: req.headers["userId"] }).populate(
    "purchasedCourses"
  );
  if (user?.purchasedCourses) {
    res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.status(403).json({ message: "User not found" });
  }
});

export default router;
