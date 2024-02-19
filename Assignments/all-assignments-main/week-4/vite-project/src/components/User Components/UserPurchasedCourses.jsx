/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { Card, Typography, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";

function UserPurchasedCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(
        "http://localhost:3000/users/purchasedCourses/",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("user")}`,
          },
        }
      );
      setCourses(response.data.purchasedCourses);
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
    </Card>
  );
}

export default UserPurchasedCourses;
