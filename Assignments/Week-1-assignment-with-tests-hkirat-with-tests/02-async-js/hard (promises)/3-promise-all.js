/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 1 second");
    }, 1000);
  });
}

function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds");
    }, 2000);
  });
}

function waitThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 3 seconds");
    }, 3000);
  });
}

async function calculateTime() {
  const startTime = Date.now();

  // Use Promise.all to wait for all three promises to resolve
  const results = await Promise.all([
    waitOneSecond(),
    waitTwoSeconds(),
    waitThreeSeconds(),
  ]);

  const endTime = Date.now();
  const elapsedTime = endTime - startTime;

  console.log("All promises resolved in", elapsedTime / 1000, "seconds");
  console.log(results); // Array containing the resolved values
}

calculateTime();
