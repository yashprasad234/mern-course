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

mongoose.connect(
  "mongodb+srv://yashprasad272:T9PNoLc8VqVHKY8U@clusterforweek7.ir02xe7.mongodb.net/",
  {
    dbName: "courses",
  }
);

app.listen(3000, () => console.log("Server running on port 3000"));
