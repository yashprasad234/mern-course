/* eslint-disable react/prop-types */
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading.js";

function Landing() {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);

  return (
    <div>
      <Grid container style={{ padding: "5vw" }}>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ marginTop: 100 }}>
            <Typography variant={"h2"}>Coursera Admin</Typography>
            <Typography variant={"h5"}>
              A place to learn, earn and grow
            </Typography>
            {!userLoading && !userEmail && (
              <div style={{ display: "flex", marginTop: 20 }}>
                <div style={{ marginRight: 10 }}>
                  <Button
                    size={"large"}
                    variant={"contained"}
                    onClick={() => {
                      navigate("/admin/signup");
                    }}
                  >
                    Signup
                  </Button>
                </div>
                <div>
                  <Button
                    size={"large"}
                    variant={"contained"}
                    onClick={() => {
                      navigate("/admin/signin");
                    }}
                  >
                    Signin
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div></div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
          <img
            src={
              "https://www.allisonacademy.com/wp-content/uploads/2021/12/The-role-of-teachers-in-society.jpg"
            }
            width={"100%"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
