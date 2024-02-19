/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";

function ShowCourses() {
  const [courses, setCourses] = useState([]);
  const token = sessionStorage.getItem("admin");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/courses",
          config
        );
        console.log(response.data.courses);
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
      <h1>Create Course Page</h1>
      {courses.map((c) => (
        <Course key={c.id} title={c.title} />
      ))}
    </div>
  );
}

function Course(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default ShowCourses;
