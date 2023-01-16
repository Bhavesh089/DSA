const solve = (A) => {
  const swap = (arr) => {
    i = 0;
    j = arr.length - 1;
    console.log(i, j);
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];

      i++;
      j--;
    }
  };

  for (i = 0; i < A.length; i++) {
    for (j = i; j < A[0].length; j++) {
      [A[i][j], A[j][i]] = [A[j][i], A[i][j]];
    }
  }

  for (k = 0; k < A.length; k++) {
    swap(A[k]);
  }

  return A;
};

console.log(
  solve([
    [1, 2],
    [3, 4],
  ])
);
