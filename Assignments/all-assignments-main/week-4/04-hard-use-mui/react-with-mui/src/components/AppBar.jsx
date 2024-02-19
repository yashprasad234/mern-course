import { Button, Typography } from "@mui/material";
import { useState } from "react";

function AppBar() {
  const [token, setToken] = useState(sessionStorage.getItem("admin"));

  if (!token) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "4px",
        }}
      >
        <div>
          <Typography variant="h6">Coursera</Typography>
        </div>
        <div
          style={{
            display: "flex",
            width: "150px",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              window.location = "/signup";
            }}
          >
            Sign up
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={() => {
              window.location = "/signin";
            }}
          >
            Sign in
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "4px",
      }}
    >
      <div>
        <Typography variant="h6">Coursera</Typography>
      </div>
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            window.location = "/courses";
          }}
        >
          Courses
        </Button>

        <Button
          variant="contained"
          size="small"
          onClick={() => {
            window.location = "/addcourse";
          }}
        >
          Add Course
        </Button>

        <Button
          variant="contained"
          size="small"
          onClick={() => {
            sessionStorage.setItem("admin", null);
            setToken(null);
            window.location = "/";
          }}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
}

export default AppBar;
