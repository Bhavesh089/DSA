const solve = (arr) => {
  const even = [];
  const odd = [];

  arr.reduce((a, b, i) => {
    if ((i & 1) == 0) {
      return (even[i] = a + b);
    } else {
      return (even[i] = a);
    }
  }, 0);

  arr.reduce((a, b, i) => {
    if ((i & 1) == 0) {
      return (odd[i] = a);
    } else {
      return (odd[i] = a + b);
    }
  }, 0);

  count = 0;
  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      sumEven = 0;
      sumOdd = 0;
    } else {
      sumEven = even[i - 1];
      sumOdd = odd[i - 1];
    }

    sumEven += odd[arr.length - 1] - odd[i];
    sumOdd += even[arr.length - 1] - even[i];

    if (sumEven == sumOdd) {
      count++;
    }
  }

  return count;
};

console.log(solve([1, 1, 1]));
