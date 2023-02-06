const solve = (A) => {
  b = {};
  sum = 0;
  ans = 0;
  for (let i in A) {
    sum += A[i];

    if (sum == 0) {
      ans = Math.max(ans, parseInt(i) + 1);
    } else if (!b.hasOwnProperty(sum)) {
      b[sum] = i;
    } else {
      ans = Math.max(ans, parseInt(i) - parseInt(b[sum]));
    }
  }

  return ans;
};
console.log(solve([1, -1, -2, 2]));
