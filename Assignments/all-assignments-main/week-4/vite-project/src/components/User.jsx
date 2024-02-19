import { BrowserRouter as Route, Routes } from "react-router-dom";
import UserSignup from "./User Components/UserSignup";
import UserSignin from "./User Components/UserSignin";
import UserCourses from "./User Components/UserCourses";
import UserCourse from "./User Components/UserCourse";
import UserPurchasedCourses from "./User Components/UserPurchasedCourses";

function User() {
  return (
    <Routes>
      <Route path="/users/signup" element={<UserSignup />} />
      <Route path="/users/signin" element={<UserSignin />} />
      <Route path="/users/courses" element={<UserCourses />} />
      <Route path="/users/courses/:courseId" element={<UserCourse />} />
      <Route
        path="/users/purchasedCourses"
        element={<UserPurchasedCourses />}
      />
    </Routes>
  );
}

export default User;
