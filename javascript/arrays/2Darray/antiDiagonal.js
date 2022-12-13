const solve = (A) => {
  let ans = [];
  let row;
  let col;

  for (x = 0; x < A.length; x++) {
    row = 0;
    col = x;
    let dia = [];
    while (row < A.length) {
      if (col < 0) {
        dia.push(0);
      } else {
        dia.push(A[row][col]);
      }
      row += 1;
      col -= 1;
    }
    ans.push(dia);
  }

  for (x = 1; x < A.length; x++) {
    row = x;
    col = A.length - 1;
    let dia = [];
    while (col >= 0) {
      if (row > A.length - 1) {
        dia.push(0);
      } else {
        dia.push(A[row][col]);
      }

      row += 1;
      col -= 1;
    }
    ans.push(dia);
  }

  return ans;
};

console.log(
  solve([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
