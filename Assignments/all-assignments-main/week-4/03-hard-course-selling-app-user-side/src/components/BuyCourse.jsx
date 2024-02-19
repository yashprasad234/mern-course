/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BuyCourse() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/courses/${+courseId}`,
          config
        );
        console.log(response.data);
        setCourse(response.data);
      } catch (error) {
        console.error("Failed to fetch course", error);
      }
    };

    fetchCourse();
  }, []);

  const handleClick = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/users/courses/${courseId}`,
        null,
        config
      );
      console.log(response.data);
    } catch (error) {
      console.error("Failed to purchase the course: ", error);
    }
  };

  return (
    <>
      <div>
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <p>{course.price}</p>
        </div>
        <button onClick={handleClick}>Buy Course</button>
      </div>
    </>
  );
}

export default BuyCourse;
