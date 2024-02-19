/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Course() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const token = sessionStorage.getItem("admin");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/admin/courses/${+courseId}`,
          config
        );
        console.log(response.data.course);
        setCourse(response.data.course);
      } catch (error) {
        console.error("Error fetching course: ", error);
      }
    };

    fetchCourse();
  }, []);

  return (
    <>
      <div>
        <h1>{course.title}</h1>
      </div>
    </>
  );
}

export default Course;
