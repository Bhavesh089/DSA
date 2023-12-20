const solve = (A, B) => {
  const searchK = (A) => {
    l = 0;
    h = A.length - 1;
    ans = 0;
    while (l <= h) {
      mid = Math.floor((l + h) / 2);
      ans = mid;
      if (A[mid] <= A[A.length - 1]) {
        h = mid - 1;
      } else if (A[mid] > A[A.length - 1]) {
        l = mid + 1;
      }
    }

    return Math.floor((l + h) / 2);
  };

  const searchEle = (A, start, end, B) => {
    l = start;
    h = end;

    if (h < 0) {
      h = 0;
    }

    while (l <= h) {
      mid = Math.floor((l + h) / 2);

      if (A[mid] == B) {
        return mid;
      } else if (A[mid] < B) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }

    return -1;
  };

  index = searchK(A);

  if (B <= A[A.length - 1]) {
    return searchEle(A, index + 1, A.length - 1, B);
  } else {
    return searchEle(A, 0, index, B);
  }
};

console.log(solve([5, 1, 3], 5));
