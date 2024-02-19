fetch("http://localhost:3000/handleSum?counter=10", {
  method: "GET",
}).then((result) => {
  result.json().then((logResponseBody) => console.log(logResponseBody));
});
