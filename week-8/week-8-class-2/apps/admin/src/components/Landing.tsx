import { Grid, Typography, Button } from "@mui/material";

export default function Landing() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div style={{ marginTop: "280px", marginLeft: "100px" }}>
            <Typography variant="h4">Admin Dashboard</Typography>
            <br />
            <Button variant="contained">View Courses</Button>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
              alt="courses"
              width={"600px"}
              height={"360px"}
              style={{ marginTop: "150px" }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
