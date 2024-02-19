/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => res.json({ msg: "hello world after the class" }));

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(
  "mongodb+srv://yashprasad107:LQfQEaGFf5g51GLO@cluster0.lk6yzk1.mongodb.net/",
  {
    useUnifiedTopology: true,
    dbName: "courses",
  }
);

app.listen(3000, () => console.log("Server running on port 3000"));
