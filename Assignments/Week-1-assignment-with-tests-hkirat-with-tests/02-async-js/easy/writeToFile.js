const fs = require("fs");

fs.writeFile("b.txt", "I am inevitable", (err, data) => {
  if (err) console.error("Error writing to the file");
  else console.log("Written to the file successfully");
});

let sum = 0;
let now = Date.now();
for (let i = 0; i < 4999999999; i++) {
  sum += i;
}
console.log(sum);
console.log((Date.now() - now) / 1000);
