import { Card, TextField, Button, Typography } from "@mui/material";

export default function Signup() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Typography variant="h4">New here? Sign Up below.</Typography>
      <Card
        style={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          alignItems: "center",
          padding: "50px",
          boxShadow: "0 0 5px 0 black",
        }}
      >
        <TextField
          label="Email"
          type="text"
          variant="outlined"
          fullWidth={true}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth={true}
        />
        <Button variant="contained" size="large" fullWidth={true}>
          Sign up
        </Button>
      </Card>
    </div>
  );
}
