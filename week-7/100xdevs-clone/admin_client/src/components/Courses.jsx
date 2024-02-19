/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Card, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(`http://localhost:3000/admin/courses/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin")}`,
        },
      });
      setCourses(response.data.courses);
    };

    fetchCourses();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course) => {
        return <Course key={course._id} course={course} />;
      })}
    </div>
  );
}

function Course({ course }) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20,
      }}
    >
      <Typography textAlign={"center"} variant="h5">
        {course.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {course.description}
      </Typography>
      <img src={course.imageLink} style={{ width: 300 }}></img>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate(`/admin/courses/${course._id}`);
          }}
        >
          Edit
        </Button>
      </div>
    </Card>
  );
}

export default Courses;
