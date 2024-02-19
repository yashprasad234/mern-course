/* eslint-disable no-unused-vars */
import { Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/login",
        null,
        {
          headers: {
            username,
            password,
          },
        }
      );
      setUsername("");
      setPassword("");
      const token = response.data.token;
      console.log(token);
      sessionStorage.setItem("admin", token);
      console.log("Signed in successfully");
      navigate("/courses");
      // window.location = "/courses";
    } catch (error) {
      console.error("Failed to sign in", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div>
      <div
        style={{
          paddingTop: "150px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">Welcome back. Sign in below</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="outlined"
          style={{
            width: "400px",
            padding: "20px",
          }}
        >
          <TextField
            fullWidth={true}
            label="Email"
            variant="outlined"
            type="email"
            value={username}
            name="username"
            onChange={handleChange}
          ></TextField>
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          ></TextField>
          <br />
          <br />
          <Button variant="contained" onClick={handleClick}>
            Sign in
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
