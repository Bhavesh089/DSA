const solve = (A) => {
  l = 0;
  h = A.length - 1;

  while (l <= h) {
    //if edge case

    mid = Math.floor((l + h) / 2);

    if (mid == 0 || mid == A.length - 1) {
      return Math.max(A[l], A[h]);
    }

    if (A[mid] > A[mid + 1] && A[mid] > A[mid - 1]) {
      return A[mid];
    } else if (A[mid] > A[mid - 1]) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }

  return A[mid];
};

console.log(solve([5, 17, 100, 11]));
