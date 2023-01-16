const solve = (A) => {
  let m = [];
  for (let x = 0; x < A; x++) {
    m.push(new Array(A).fill(0));
  }

  console.log(m);

  let sr = 0;
  let sc = 0;
  let ec = A - 1;
  let er = A - 1;

  let count = 1;

  let x = A * A;

  while (count <= x) {
    //top right to left
    for (let i = sc; i <= ec; i++) {
      m[sr][i] = count;
      count++;
    }

    sr++;

    for (let i = sr; i <= er; i++) {
      m[i][ec] = count;
      count++;
    }

    ec--;

    for (let i = ec; i >= sc; i--) {
      m[er][i] = count;
      count++;
    }
    er--;

    for (let i = er; i >= sr; i--) {
      m[i][sc] = count;
      count++;
    }
    sc++;
  }

  return m;
};

console.log(solve(8));
