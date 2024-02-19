/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

function CreateCourse() {
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: 0,
    imageLink: "",
    published: false,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("admin");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/courses",
        newCourse,
        config
      );
      console.log(response.data);
      console.log("Course created successfully");
    } catch (error) {
      console.error("Failed to create course: ", error);
    }
    setNewCourse({
      title: "",
      description: "",
      price: 0,
      imageLink: "",
      published: false,
    });
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

  return (
    <div>
      <NavBar />
      <h1>Create Course Page</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Title </label>
        <input
          type="text"
          name="title"
          value={newCourse.title}
          placeholder="Enter title"
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Description </label>
        <input
          type="text"
          name="description"
          value={newCourse.description}
          placeholder="Enter description"
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Price </label>
        <input
          type="number"
          name="price"
          value={newCourse.price}
          placeholder="Enter price"
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Image Link </label>
        <input
          type="url"
          name="imageLink"
          value={newCourse.imageLink}
          placeholder="Enter image URL"
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Published </label>
        <input
          type="radio"
          name="published"
          value="true"
          checked={newCourse.published === true}
          onChange={handleRadioChange}
        />
        <label>True </label>

        <input
          type="radio"
          name="published"
          value="false"
          checked={newCourse.published === false}
          onChange={handleRadioChange}
        />
        <label>False </label>
        <br />
        <br />

        <button type="submit">Create Course</button>
      </form>
    </div>
  );
}

export default CreateCourse;
