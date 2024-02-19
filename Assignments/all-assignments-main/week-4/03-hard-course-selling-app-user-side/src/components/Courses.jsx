/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = sessionStorage.getItem("user");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.get(
          "http://localhost:3000/users/courses",
          config
        );

        setCourses(response.data.courses);
      } catch (error) {
        console.error("Failed to fetch courses: ", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Browse Courses</h1>
      {courses.map((c) => (
        <CourseEl key={c.id} title={c.title} id={c.id} />
      ))}
    </div>
  );
}

function CourseEl(props) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <button
        onClick={() => {
          handleClick(props.id);
        }}
      >
        Buy Course
      </button>
    </div>
  );
}

export default Courses;
