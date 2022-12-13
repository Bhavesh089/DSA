const bulbs = (A) => {
  let timesPress = 0;

  for (x = 0; x <= A.length - 2; x++) {
    if (A[x] === 0 && A[x + 1] === 1) {
      timesPress += 2;
    }

    if (A[A.length - 1] === 0) {
      timesPress += 1;
    }
  }

  return timesPress;
};

console.log(bulbs([1, 1, 1, 1]));
