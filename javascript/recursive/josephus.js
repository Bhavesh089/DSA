const solve = (A, B, C) => {
  if (A == 1) {
    return 0;
  }

  return (solve(A - 1, B, C) + B) % A;
};

console.log(solve(4, 2, 4) + 1);
