const solve = (A, B) => {
  low = 0;
  high = A.length - 1;

  while (low <= high) {
    mid = parseInt(Math.floor((low + high) / 2));

    if (A[mid] == B) {
      return mid;
    } else if (B > A[mid]) {
      low = parseInt(mid) + 1;
    } else {
      high = parseInt(mid) - 1;
    }
  }
  //   if (mid === A.length - 1) {
  //     return mid + 1;
  //   }
  return high + 1;
};

//if mid is last add item then +1

console.log(solve([1, 2, 3, 7], 0));
