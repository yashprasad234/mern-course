/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { Card, Typography, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get("http://localhost:3000/users/courses/", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("user")}`,
        },
      });
      setCourses(response.data.courses);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {courses.map((c) => {
          return (
            <Grid item m={4} key={c.id}>
              <Course key={c.id} course={c} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

function Course({ course }) {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20,
      }}
    >
      <Typography variant="h5" textAlign={"center"}>
        {course.title}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"}>
        {course.description}
      </Typography>
      <img src={course.imageLink} style={{ width: 300 }} />
      <br />
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          navigate(`/users/courses/${course._id}`);
        }}
      >
        Buy Course
      </Button>
    </Card>
  );
}

export default UserCourses;
