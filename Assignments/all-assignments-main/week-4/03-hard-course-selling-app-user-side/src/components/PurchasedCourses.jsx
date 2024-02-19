/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

function PurchasedCourses() {
  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      try {
        const response = await axios(
          `http://localhost:3000/users/purchasedCourses`,
          config
        );
        console.log(response.data.purchasedCourses);
        setCourses(response.data.purchasedCourses);
      } catch (error) {
        console.error("Error Fetching Purchased Courses: ", error);
      }
    };

    fetchPurchasedCourses();
  }, []);

  return (
    <>
      <h1>These are your purchased courses</h1>
      <div>
        {courses.map((c) => (
          <Course key={c.id} title={c.title} description={c.description} />
        ))}
      </div>
    </>
  );
}

function Course(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default PurchasedCourses;
