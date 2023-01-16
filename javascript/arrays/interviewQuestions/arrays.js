const solve = (A, B) => {
  minSum = Infinity;

  for (i = 1; i <= A.length - 2; i++) {
    qsum = B[i];
    psum = Infinity;
    for (p = 0; p < i; p++) {
      if (A[p] < A[i]) {
        psum = Math.min(psum, B[p]);
      }
    }

    if (psum == Infinity) {
      continue;
    }

    rsum = Infinity;
    for (r = i + 1; r < A.length; r++) {
      if (A[r] > A[i]) {
        rsum = Math.min(rsum, B[r]);
      }
    }

    if (rsum == Infinity) {
      continue;
    }

    minSum = Math.min(minSum, psum + qsum + rsum);
  }

  return minSum == Infinity ? -1 : minSum;
};

console.log(solve([5, 9, 10, 4, 7, 8], [5, 6, 4, 7, 2, 5]));
