const solve = (A, B) => {
  const n = A.length;
  const m = B.length;

  const median = (A, B, n, m) => {
    console.log(A, B, n, m);
    l = 0;
    h = n;

    while (l <= h) {
      mid1 = Math.floor((l + h) / 2);
      mid2 = Math.floor((n + m + 1) / 2) - mid1;

      l1 = mid1 == 0 ? -Infinity : A[mid1 - 1];
      l2 = mid2 == 0 ? -Infinity : B[mid2 - 1];
      r1 = mid1 == n ? Infinity : A[mid1];
      r2 = mid2 == m ? Infinity : B[mid2];
      console.log(mid1, l1, l2, r1, r2);

      if (l1 <= r2 && l2 <= r1) {
        if ((n + m) % 2 == 0) {
          return parseFloat((Math.max(l1, l2) + Math.min(r1, r2)) / 2);
        } else {
          return parseFloat(Math.max(l1, l2)).toFixed(1);
        }
      } else if (l1 > r2) {
        h = mid1 - 1;
      } else {
        l = mid1 + 1;
      }
    }
  };

  if (m > n) {
    return median(A, B, n, m);
  } else {
    return median(B, A, m, n);
  }
};

console.log(solve([35], [1, 26, 35, 49]));
