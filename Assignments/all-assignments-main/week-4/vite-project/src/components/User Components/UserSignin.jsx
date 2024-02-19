/* eslint-disable no-unused-vars */
import axios from "axios";
import { Card, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

function UserSignin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <Typography variant="h5">Welcome to Coursera.</Typography>
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
                "http://localhost:3000/users/login",
                null,
                {
                  headers: {
                    username: username,
                    password: password,
                  },
                }
              );
              console.log(response.data.token);
              sessionStorage.clear();
              sessionStorage.setItem("user", response.data.token);
              window.location = "/users/courses";
            }}
          >
            Log In
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default UserSignin;
