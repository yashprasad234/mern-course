import { Typography, Button } from "@mui/material";

export default function Appbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundColor: "purple",
        padding: "10px",
      }}
    >
      <Typography variant="h4" style={{ color: "#1976d2", marginLeft: "30px" }}>
        EZLearn
      </Typography>
      <div
        style={{
          display: "flex",
        }}
      >
        <Button variant="text" size="large">
          Courses
        </Button>
        <Button variant="text" size="large">
          Add Course
        </Button>
      </div>
    </div>
  );
}
