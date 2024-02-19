const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file");
  } else {
    console.log(data);
  }
});

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
console.log(sum);
