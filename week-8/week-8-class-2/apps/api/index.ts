import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import adminRoutes from "./routes/admin";
import userRoutes from "./routes/user";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect(
  "mongodb+srv://yashprasad107:LQfQEaGFf5g51GLO@cluster0.lk6yzk1.mongodb.net/",
  { dbName: "courses" }
);
