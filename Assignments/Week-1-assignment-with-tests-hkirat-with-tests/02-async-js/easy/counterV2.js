let counter = 0;

function counterIncrease() {
  counter++;
  console.log(counter);
  setTimeout(counterIncrease, 1000);
}

counterIncrease();
