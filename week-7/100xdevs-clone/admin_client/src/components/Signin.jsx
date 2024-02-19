/* eslint-disable react/prop-types */
import { Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user.js";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);

  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>
          Welcome back to Coursera. Sign in
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            fullWidth={true}
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />

          <Button
            size={"large"}
            variant="contained"
            onClick={async () => {
              const response = await axios.post(
                `http://localhost:3000/admin/signin`,
                null,
                {
                  headers: {
                    username: email,
                    password,
                  },
                }
              );
              console.log(response.data);
              localStorage.setItem("admin", response.data.token);
              setUser({ userEmail: email, isLoading: false });
              navigate("/admin/courses");
            }}
          >
            {" "}
            Signin
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
