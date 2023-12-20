const solve = (A, B) => {
  l = 1;
  n = A.length;
  h = A[n - 1] - A[0];
  ans = 0;

  A = A.sort((a, b) => a - b);
  console.log(A);

  const checkMid = (A, mid, B) => {
    count = 1;

    previousMin = A[0];
    for (i = 1; i < A.length; i++) {
      if (A[i] - previousMin >= mid) {
        count++;
        previousMin = A[i];

        if (count == B) return true;
      }
    }
    return false;
  };
  while (l <= h) {
    mid = Math.floor(l + (h - l / 2));

    if (checkMid(A, mid, B)) {
      ans = mid;
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }

  return ans;
};

console.log(solve([1, 2, 6, 4, 5], 3));
