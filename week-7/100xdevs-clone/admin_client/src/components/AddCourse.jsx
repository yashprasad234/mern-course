import { TextField, Button, Card } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          varint={"outlined"}
          style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}
        >
          <TextField
            style={{ marginBottom: 10 }}
            fullWidth={true}
            value={title}
            label="Title"
            variant="outlined"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <TextField
            style={{ marginBottom: 10 }}
            fullWidth={true}
            value={description}
            label="Description"
            variant="outlined"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <TextField
            style={{ marginBottom: 10 }}
            fullWidth={true}
            value={image}
            label="Image link"
            variant="outlined"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          <TextField
            style={{ marginBottom: 10 }}
            fullWidth={true}
            value={price}
            label="Price"
            variant="outlined"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />

          <Button
            size={"large"}
            variant="contained"
            onClick={async () => {
              const response = await axios.post(
                `http://localhost:3000/admin/courses`,
                {
                  title,
                  description,
                  imageLink: image,
                  price,
                  published: true,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("admin"),
                  },
                }
              );
              console.log(response.data);
            }}
          >
            Add course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
