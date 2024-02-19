/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSignup from "./components/Admin Components/AdminSignup";
import AdminSignin from "./components/Admin Components/AdminSignin";
import AdminCourses from "./components/Admin Components/AdminCourses";
import AdminCourse from "./components/Admin Components/AdminCourse";
import Appbar from "./components/Appbar";
import AddCourse from "./components/Admin Components/AddCourse";
import UserSignup from "./components/User Components/UserSignup";
import UserSignin from "./components/User Components/UserSignin";
import UserCourses from "./components/User Components/UserCourses";
import UserCourse from "./components/User Components/UserCourse";
import UserPurchasedCourses from "./components/User Components/UserPurchasedCourses";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/signin" element={<AdminSignin />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/courses/:courseId" element={<AdminCourse />} />
          <Route path="/admin/addcourse" element={<AddCourse />} />
          <Route path="/users/signup" element={<UserSignup />} />
          <Route path="/users/signin" element={<UserSignin />} />
          <Route path="/users/courses" element={<UserCourses />} />
          <Route path="/users/courses/:courseId" element={<UserCourse />} />
          <Route
            path="/users/purchasedCourses"
            element={<UserPurchasedCourses />}
          />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
