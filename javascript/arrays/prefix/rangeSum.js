A = [4, 5, 6, 9, 4, 1, 8, 3];
B = [
  [2, 4],
  [7, 8],
  [1, 4],
  [1, 6],
  [8, 8],
  [2, 2],
  [4, 8],
  [2, 4],
  [7, 8],
  [6, 7],
];

const solve = function (A, B) {
  let cum = [];
  A.reduce((a, b, i) => {
    return (cum[i] = parseInt(BigInt(a) + BigInt(b)));
  }, 0);
  let ans = [];
  for (let x of B) {
    if (x[0] - 1 == 0) {
      ans.push(cum[x[1] - 1]);
    } else {
      let rangeSum =
        BigInt(cum[BigInt(x[1] - 1)]) - BigInt(cum[BigInt(x[0] - 1 - 1)]);
      ans.push(rangeSum);
    }
  }
  return ans;
};

console.log(solve(A, B));
