const solve = (B, C) => {
  let sum = 0;
  let i = 0;
  let j = 0;
  let maxSum = -Infinity;
  while (j < C.length) {
    if (sum + C[j] <= B) {
      sum += C[j];
      //   console.log(sum);

      if (sum == B) {
        return sum;
      }

      if (sum < B && maxSum < sum) {
        maxSum = sum;
      }

      j++;
    } else {
      if (sum == 0) {
        j++;
      } else {
        sum -= C[i];

        i++;
      }
    }
  }

  return maxSum;
};

console.log(solve(19, [6, 8, 10, 5]));
