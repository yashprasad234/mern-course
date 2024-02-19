/* eslint-disable react/prop-types */
import { Typography, Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("admin")}`,
        },
      };
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/courses",
          config
        );
        setCourses(response.data.courses);
        console.log("Successfully fetched courses");
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ marginTop: "15px" }}>
      {courses.map((c) => (
        <Course key={c.id} course={c} />
      ))}
    </div>
  );
}

function Course(props) {
  const navigate = useNavigate();

  const handleClick = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/admin/courses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("admin")}`,
          },
        }
      );
      console.log(response.data.course);
      navigate(`/courses/${id}`);
    } catch (error) {
      console.error("Failed to get the course: ", error);
    }
  };

  return (
    <div style={{ marginLeft: "15px" }}>
      <Card
        onClick={() => {
          handleClick(props.course.id);
        }}
        variant="outlined"
        style={{
          width: "250px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "18px",
        }}
      >
        <Typography textAlign={"center"} variant="h6">
          {`${props.course.title}`.replace(
            `${props.course.title}`.charAt(0),
            `${props.course.title}`.charAt(0).toUpperCase()
          )}
        </Typography>
        <br />
        <Typography variant="p">
          {`${props.course.description}`.replace(
            `${props.course.description}`.charAt(0),
            `${props.course.description}`.charAt(0).toUpperCase()
          )}
        </Typography>
        <br />
        <img
          src={props.course.imageLink}
          style={{ width: "250px", height: "200px" }}
        />
      </Card>
      <br />
      <br />
    </div>
  );
}

export default Courses;
