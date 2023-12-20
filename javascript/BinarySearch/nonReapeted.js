const solve = (A) => {
  l = 0;
  h = A.length - 1;

  while (l <= h) {
    mid = Math.floor((l + h) / 2);

    if (l == 0 && h == 1) {
      return A[l];
    }

    if ((l == 0 && h == 0) || (l == A.length - 1 && h == A.length - 1)) {
      return A[mid];
    }

    if (A[mid] != A[mid + 1] && A[mid] != A[mid - 1]) {
      return A[mid];
    } else if (
      (mid % 2 == 0 && A[mid] == A[mid + 1]) ||
      (mid % 2 != 0 && A[mid] == A[mid - 1])
    ) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
};

console.log(solve([2, 3, 3]));
