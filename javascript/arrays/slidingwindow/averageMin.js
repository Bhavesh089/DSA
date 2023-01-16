const solve = (A, B) => {
  let i = 0;
  let j = 0;

  let index = -Infinity;
  let sum = 0;
  let avg;
  let minAvg = Infinity;
  while (j < A.length) {
    sum += A[j];

    if (j - i + 1 == B) {
      avg = sum / B;
      if (minAvg > avg) {
        minAvg = avg;
        index = i;
      }

      sum -= A[i];

      i++;
    }

    j++;
  }
  return index;
};

console.log(solve([20, 3, 13, 5, 10, 14, 8, 5, 11, 9, 1, 11], 9));
