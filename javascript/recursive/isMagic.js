const solve = (A, acc) => {
  if (Math.floor(acc / 10) == 0 && A == 0) {
    return acc;
  }

  if (A == 0) {
    A = acc;
    acc = 0;
  }
  rem = A % 10;
  A = Math.floor(A / 10);
  acc += rem;

  return solve(A, acc);
};

console.log(solve(1291, 0));
