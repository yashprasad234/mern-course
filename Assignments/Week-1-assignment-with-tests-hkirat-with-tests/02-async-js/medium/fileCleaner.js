const fs = require("fs");

function cleanString(str) {
  const arr = str.split(" ");
  const cleanedString = arr.filter((el) => el !== "").join(" ");
  return cleanedString;
}

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) console.error("Error reading from file");
  else {
    const writeData = cleanString(data);
    fs.writeFile("a.txt", writeData, (err, data) => {
      if (err) console.error("Error writing to the file");
      else console.log("Written to the file successfully");
    });
  }
});
