/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Card, Grid, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UserCourse() {
  let { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/courses/${courseId}/`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("user")}`,
            },
          }
        );
        console.log(response.data);
        setCourse(response.data.course);
      } catch (error) {
        console.error("Failed to fetch course", error);
      }
    };
    fetchCourse();
  }, []);

  if (course) {
    return (
      <div>
        <GrayTopper title={course.title} />
        <Grid container>
          <Grid item lg={4} md={12} sm={12}>
            <CourseCard course={course} />
          </Grid>
        </Grid>
        <CourseDetails course={course} />
      </div>
    );
  }
  return (
    <div
      style={{
        height: "100vh",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      Loading....
    </div>
  );
}

function GrayTopper({ title }) {
  return (
    <div
      style={{
        height: 250,
        background: "#212121",
        top: 0,
        width: "100vw",
        zIndex: 0,
        marginBottom: -250,
      }}
    >
      <div
        style={{
          height: 250,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography
            style={{ color: "white", fontWeight: 600 }}
            variant="h3"
            textAlign={"center"}
          >
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;
  return (
    <div
      style={{
        display: "flex",
        marginTop: 50,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Card
        style={{
          margin: 10,
          width: 350,
          minHeight: 200,
          borderRadius: 20,
          marginRight: 50,
          zIndex: 2,
        }}
      >
        <img src={course.imageLink} style={{ width: 350 }}></img>
      </Card>
    </div>
  );
}

function CourseDetails({ course }) {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ width: "100%", margin: "20px 30px 30px 40px" }}>
        <Typography variant="h5">{course.description}</Typography>
        <Button
          variant="contained"
          size="large"
          style={{ marginTop: 20 }}
          onClick={async () => {
            try {
              const response = await axios.post(
                `http://localhost:3000/users/courses/${course._id}`,
                null,
                {
                  headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("user")}`,
                  },
                }
              );
              console.log(response.data);
              navigate("/users/purchasedCourses");
            } catch (error) {
              console.error("Failed to purchase course: ", error);
            }
          }}
        >
          Buy Course
        </Button>
      </div>
    </div>
  );
}

export default UserCourse;
