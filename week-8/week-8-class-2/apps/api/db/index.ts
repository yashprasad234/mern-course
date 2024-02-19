import mongoose from 'mongoose';

// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: "Course"}]
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imgaeLink: String,
    published: Boolean,
    price: Number,
});

// databases/tables/documents

export const User = mongoose.model("User", userSchema);
export const Admin = mongoose.model("Admin", adminSchema);
export const Course = mongoose.model("Course", courseSchema);