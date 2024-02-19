import jwt from "jsonwebtoken";
import express from "express";
import { SECRET, authenticateJwt } from "../middleware/";
import { Admin, Course } from "../db";

const router = express.Router();

router.get("/me", authenticateJwt, async (req, res) => {
  const admin = await Admin.findOne({ _id: req.headers["userId"] });
  if (admin) {
    res.json({ username: admin.username });
  } else {
    res.status(403).json({ message: "Admin not logged in" });
  }
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (admin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    const token = jwt.sign({ id: newAdmin._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Admin created successfully", token });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.headers;
  const adminExists = await Admin.findOne({ username });
  if (adminExists) {
    const correctAdmin = await Admin.findOne({ username, password });
    if (correctAdmin) {
      const token = jwt.sign({ id: correctAdmin._id }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Incorrect username or password" });
    }
  } else {
    res.status(403).json({ message: "Admin doesn't exist" });
  }
});

router.post("/courses", authenticateJwt, async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json({ message: "Course created successfully", courseId: course._id });
});

router.get("/courses", authenticateJwt, async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
});

router.get("/courses/:courseId", authenticateJwt, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  res.json({ course });
});

router.put("/courses/:courseId", authenticateJwt, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findByIdAndUpdate(courseId, req.body);
  res.json({ message: "Course updated successfully" });
});

router.delete("/courses/:courseId", authenticateJwt, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findByIdAndDelete(courseId);
  res.json({ message: "Course deleted successfully" });
});

export default router;