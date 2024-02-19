/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import AddCourse from "./components/AddCourse";
import Appbar from "./components/Appbar";
import Course from "./components/Course";
import Courses from "./components/Courses";
import Signin from "./components/Signin";
import { useEffect } from "react";
import axios from "axios";
import { userState } from "./store/atoms/user";
import { RecoilRoot, useSetRecoilState } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
      >
        <Router>
          <Appbar />
          <Routes>
            <Route path="/admin/addcourse" element={<AddCourse />} />
            <Route path="/admin/courses/:courseId" element={<Course />} />
            <Route path="/admin/courses" element={<Courses />} />
            <Route path="/admin/signin" element={<Signin />} />
            <Route path="/admin/signup" element={<Signup />} />
            <Route path="/admin" element={<Landing />} />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

function InitUser() {
  const setUser = useSetRecoilState("userState");

  const init = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin")}`,
        },
      });
      if (res.data.username) {
        setUser({
          isLoading: false,
          userEmail: res.data.username,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isLoading: true,
        userEmail: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
}

export default App;
