import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSignup from "./Admin Components/AdminSignup";
import AdminSignin from "./Admin Components/AdminSignin";
import AdminCourses from "./Admin Components/AdminCourses";
import AdminCourse from "./Admin Components/AdminCourse";
import AddCourse from "./Admin Components/AddCourse";

function Admin() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/signin" element={<AdminSignin />} />
        <Route path="/admin/addcourse" element={<AddCourse />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/courses/:courseId" element={<AdminCourse />} />
      </Routes>
    </Router>
  );
}

export default Admin;
