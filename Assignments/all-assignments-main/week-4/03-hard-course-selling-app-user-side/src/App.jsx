/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Courses from "./components/Courses";
import NoMatch from "./components/NoMatch";
import PurchasedCourses from "./components/PurchasedCourses";
import BuyCourse from "./components/BuyCourse.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/purchasedCourses" element={<PurchasedCourses />} />
        <Route path="/courses/:courseId" element={<BuyCourse />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
