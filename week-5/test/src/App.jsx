/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, Typography, Button } from "@mui/material";
import { useContext, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ padding: 20, width: 500 }}>
          <Typography variant="h5" textAlign="center">
            Welcome to the counter game
          </Typography>
          <br />
          <Buttons />
          <CountComponent />
        </Card>
      </div>
    </RecoilRoot>
  );
}

function Buttons() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount + 1);
        }}
      >
        Increase counter
      </Button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount - 1);
        }}
      >
        Decrease counter
      </Button>
    </div>
  );
}

function CountComponent() {
  const count = useRecoilValue(countState);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="subtitle1">{count}</Typography>
    </div>
  );
}

export default App;

const countState = atom({
  key: "countState", // unique ID (with respect to other atoms/selectors)
  default: 0,
});
