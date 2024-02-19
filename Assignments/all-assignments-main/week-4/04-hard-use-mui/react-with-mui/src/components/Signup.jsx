import { Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/admin/signup", {
        username,
        password,
      });
      setUsername("");
      setPassword("");
      console.log(response.data);
      console.log("Signed up successfully");
      navigate("/signin");
    } catch (error) {
      console.error("Failed to create admin", error);
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
        <Typography variant="h5">Welcome to Coursera. Sign up below</Typography>
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
            name="username"
            fullWidth={true}
            label="Email"
            variant="outlined"
            type="email"
            value={username}
            onChange={handleChange}
          ></TextField>
          <br />
          <br />
          <TextField
            name="password"
            fullWidth={true}
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handleChange}
          ></TextField>
          <br />
          <br />
          <Button variant="contained" onClick={handleClick}>
            Sign up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
