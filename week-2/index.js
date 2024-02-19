const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateSum(counter) {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  let counter = req.query.counter;
  let calculatedSum = calculateSum(counter);
  const ans = {
    sum: calculatedSum,
  };
  res.send(ans);
}

app.get("/handleSum", handleFirstRequest);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
