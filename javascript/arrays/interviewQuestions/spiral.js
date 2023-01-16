const solve = (A, B, C) => {
  let mat = [];

  for (let b = 0; b < B; b++) {
    mat.push(new Array(C).fill(0));
  }

  let sc = 0;
  let sr = 0;
  let ec = C - 1;
  let er = B - 1;
  let count = 0;
  //   console.log(mat);

  while (count <= A.length - 1) {
    for (let i = sc; i <= ec; i++) {
      //   console.log(mat[sr][i], sr, A[count]);
      mat[sr][i] = A[count];
      count++;
    }

    if (count == A.length) {
      break;
    }

    sr += 1;

    for (let i = sr; i <= er; i++) {
      mat[i][ec] = A[count];
      count += 1;
    }

    ec -= 1;

    for (let i = ec; i >= sc; i--) {
      mat[er][i] = A[count];
      count += 1;
    }
    if (count == A.length - 1) {
      break;
    }

    er -= 1;
    for (let i = er; i >= sr; i--) {
      mat[i][sc] = A[count];
      count += 1;
    }
    if (count == A.length - 1) {
      break;
    }

    sc += 1;
  }

  return mat;
};

console.log(
  solve(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    1,
    20
  )
);
