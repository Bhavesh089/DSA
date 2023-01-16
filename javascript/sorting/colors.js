const solve = (A) => {
  r = 0;
  w = 0;
  b = A.length - 1;

  const swap = (A, i, j) => {
    return ([A[i], A[j]] = [A[j], A[i]]);
  };

  while (w <= b) {
    if (parseInt(A[w]) == 0) {
      swap(A, r, w);
      r++;
      w++;
    } else if (parseInt(A[w]) == 1) {
      w++;
    } else {
      swap(A, b, w);
      b--;
    }
  }
  return A;
};

console.log(solve([0, 1, 2, 0, 1, 2]));
