/* eslint-disable no-unused-vars */
import axios from "axios";
import { Card, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 150,
          marginBottom: 10,
        }}
      >
        <Typography variant="h5">Welcome to Coursera. Sign Up Below</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 350, padding: 20 }}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            fullWidth={true}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            fullWidth={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button
            variant="contained"
            size="large"
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/admin/signup",
                {
                  username: username,
                  password: password,
                }
              );
              console.log(response.data);
              navigate("/admin/signin");
            }}
          >
            Sign Up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AdminSignup;
