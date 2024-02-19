/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AppBar from "./components/AppBar";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import Course from "./components/Course";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#eee",
      }}
    >
      <RecoilRoot>
        <Router>
          <AppBar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/addcourse" element={<AddCourse />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<Course />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
