const solve = (A, B) => {
  const startEnd = (A, B) => {
    l = 0;
    h = A.length - 1;

    ans = -1;
    while (l <= h) {
      console.log(l, h);
      mid = Math.floor((l + h) / 2);
      console.log(mid, "hello--->");

      if (A[mid] == B) {
        ans = mid;
        h = mid - 1;
      } else if (A[mid] < B) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }

    return ans;
  };

  const BackEnd = (A, B) => {
    l = 0;
    h = A.length - 1;

    ans = -1;
    while (l <= h) {
      mid = Math.floor((l + h) / 2);
      if (A[mid] == B) {
        ans = mid;
        l = mid + 1;
      } else if (A[mid] < B) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }

    return ans;
  };

  return [startEnd(A, B), BackEnd(A, B)];
};

console.log(solve([5, 7, 7, 8, 8, 10], 8));
