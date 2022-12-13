const solve = (A, B) => {
  for (let x in A) {
    if (parseInt(BigInt(A[x])) % parseInt(BigInt(2)) === 0) {
      A[x] = 1;
    } else {
      A[x] = 0;
    }
  }

  const prefix = [];
  const ans = [];
  A.reduce((a, b, i) => {
    return (prefix[i] = a + b);
  }, 0);
  console.log(prefix);

  for (let y of B) {
    if (y[0] === 0) {
      ans.push(prefix[y[1]]);
    } else {
      ans.push(prefix[y[1]] - prefix[y[0] - 1]);
    }
  }
  return ans;
};

const A = [6, 3, 3, 6, 7, 8, 7, 3, 7];
const B = [
  [2, 6],
  [4, 7],
  [6, 7],
];
console.log(solve(A, B));
