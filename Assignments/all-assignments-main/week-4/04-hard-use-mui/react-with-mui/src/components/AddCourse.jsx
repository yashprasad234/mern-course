/* eslint-disable no-unused-vars */
import {
  Button,
  Card,
  TextField,
  Typography,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

function AddCourse() {
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    imageLink: "",
    price: 0,
    published: false,
  });
  const token = sessionStorage.getItem("admin");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleClick = async () => {
    try {
      console.log(newCourse);
      const response = await axios.post(
        "http://localhost:3000/admin/courses",
        newCourse,
        config
      );
      setNewCourse({
        title: "",
        description: "",
        imageLink: "",
        price: 0,
        published: false,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Failed to create course", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({
      ...newCourse,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    const value = e.target.value === "true";
    setNewCourse({
      ...newCourse,
      published: value,
    });
  };

  if (!token) {
    window.location = "/";
  }
  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Typography
          variant="h4"
          style={{ marginBottom: "20px", textAlign: "center" }}
        >
          Enter Course Details
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
            value={newCourse.title}
            onChange={handleChange}
          ></TextField>
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Description"
            variant="outlined"
            name="description"
            value={newCourse.description}
            onChange={handleChange}
          ></TextField>
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Image Link"
            variant="outlined"
            name="imageLink"
            value={newCourse.imageLink}
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
            Create Course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
