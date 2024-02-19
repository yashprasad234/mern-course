/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

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
        setCourse(response.data.course);
      } catch (error) {
        console.error("Error fetching course: ", error);
      }
    };

    fetchCourse();
  }, []);

  if (Object.keys(course).length <= 0) {
    return <div>Loading....</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <CourseCard course={course} />
      <UpdateCourseCard course={course} setCourse={setCourse} />
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;

  if (!course || Object.keys(course).length === 0) {
    return <div>Loading....</div>;
  }

  return (
    <div style={{ marginLeft: "30px", marginTop: "80px" }}>
      <Card
        variant="outlined"
        style={{
          width: "250px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "18px",
        }}
      >
        <Typography textAlign={"center"} variant="h6">
          {`${course.title}`.replace(
            `${course.title}`.charAt(0),
            `${course.title}`.charAt(0).toUpperCase()
          )}
        </Typography>
        <br />
        <Typography variant="p">
          {`${course.description}`.replace(
            `${course.description}`.charAt(0),
            `${course.description}`.charAt(0).toUpperCase()
          )}
        </Typography>
        <br />
        <img
          src={course.imageLink}
          style={{ width: "250px", height: "200px" }}
        />
      </Card>
      <br />
      <br />
    </div>
  );
}

function UpdateCourseCard(props) {
  const { course, setCourse } = props;
  const token = sessionStorage.getItem("admin");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(course);
  const [title, setTitle] = useState(`${course.title}`);
  console.log(title);
  const [description, setDescription] = useState(`${course.description}`);
  console.log(description);
  const [imageLink, setImageLink] = useState(`${course.imageLink}`);
  console.log(imageLink);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    } else {
      setImageLink(value);
    }
  };

  const handleRadioChange = (e) => {
    const value = e.target.value === "true";
    setCourse({
      ...course,
      published: value,
    });
  };

  const handleClick = async () => {
    try {
      console.log(course);
      const response = await axios.put(
        `http://localhost:3000/admin/courses/${+course.id}`,
        course,
        config
      );
      console.log(response.data);
      setCourse({
        ...course,
        title,
        description,
        imageLink,
      });
    } catch (error) {
      console.error("Failed to update the course: ", error);
    }
  };

  if (!course || Object.keys(course).length === 0) {
    return <div>Loading....</div>;
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Typography
          variant="h4"
          style={{ marginBottom: "20px", textAlign: "center" }}
        >
          Update Course
        </Typography>
        <Card
          variant="outlined"
          style={{
            width: "400px",
            padding: "20px",
          }}
        >
          <TextField
            fullWidth={true}
            label="Title"
            variant="outlined"
            name="title"
            value={title}
            onChange={handleChange}
          ></TextField>
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Description"
            variant="outlined"
            name="description"
            value={description}
            onChange={handleChange}
          ></TextField>
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Image Link"
            variant="outlined"
            name="imageLink"
            value={imageLink}
            onChange={handleChange}
          ></TextField>
          <br />
          <br />
          <FormLabel id="demo-row-radio-buttons-group-label">
            Published
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="True"
              onChange={handleRadioChange}
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="False"
              onChange={handleRadioChange}
            />
          </RadioGroup>
          <br />
          <br />
          <Button variant="outlined" size="large" onClick={handleClick}>
            Update Course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Course;
