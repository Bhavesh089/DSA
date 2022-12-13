solve = function (A) {
  const prefixSum = [];

  A.reduce((a, b, i) => {
    return (prefixSum[i] = parseInt(BigInt(a) + BigInt(b)));
  }, 0);
  let n = parseInt(A.length - 1);
  for (let index = 0; index < A.length; index++) {
    if (index == 0) {
      l = 0;
    } else {
      l = prefixSum[index - 1];
    }
    r = prefixSum[n - 1] - prefixSum[index];

    if (l == r) {
      console.log("hello");
    }
  }
  return -1;
};

const A = [1, 2, 3, 7, 1, 2, 3];
console.log(solve(A));
