/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function busyWait(seconds) {
  const startTime = Date.now();
  while (Date.now() - startTime < seconds * 1000) {
    // Perform some intensive computation (e.g., a loop of mathematical operations)
    for (let i = 0; i < 1000000; i++) {
      Math.sqrt(i);
    }
  }
}

busyWait(2); // Halts the thread for 2 seconds
for (let i = 0; i < 100; i++) {
  console.log(i);
}

console.log("Start");
console.log("After the thread is free");
