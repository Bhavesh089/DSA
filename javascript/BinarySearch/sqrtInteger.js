const solve = (A) => {
  l = 0;
  h = A;

  while (l <= h) {
    mid = Math.floor((l + h) / 2);

    if (mid * mid <= A && Math.pow(mid + 1, 2) > A) {
      return mid;
    } else if (mid * mid < A) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return -1;
};

console.log(solve(17));
