/* eslint-disable no-unused-vars */
import axios from "axios";
import { Card, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div
      style={{
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="outlined"
          style={{
            width: 350,
            padding: 20,
            marginTop: 30,
            height: "100%",
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            fullWidth={true}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            fullWidth={true}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            label="Image"
            variant="outlined"
            value={image}
            fullWidth={true}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <TextField
            label="Price"
            variant="outlined"
            type="Number"
            value={price}
            fullWidth={true}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              fullWidth={true}
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/admin/courses",
                  {
                    title: title,
                    description: description,
                    imageLink: image,
                    price: price,
                    published: true,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${sessionStorage.getItem(
                        "admin"
                      )}`,
                    },
                  }
                );
                setTitle("");
                setDescription("");
                setImage("");
                setPrice("");
                alert(`Added course!`);
              }}
            >
              Add Course
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
