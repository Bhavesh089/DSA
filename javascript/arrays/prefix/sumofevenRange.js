const solve = (A, B) => {
  let prefix = [];

  A.reduce((a, b, i) => {
    if (i % 2 != 0) {
      return (prefix[i] = a + b);
    } else {
      return (prefix[i] = a);
    }
  }, 0);

  let ans = [];
  let prefixRange;
  for (i = 0; i < B.length; i++) {
    if (B[i][0] == 0) {
      prefixRange = prefix[B[i][1]];
    } else {
      prefixRange = prefix[B[i][1]] - prefix[B[i][0] - 1];
    }
    ans.push(prefixRange);
  }

  return ans;
};

console.log(
  solve(
    [2, 1, 8, 3, 9],
    [
      [0, 3],
      [2, 4],
    ]
  )
);
