const solve = (A) => {
  if (A == 1) {
    return 1;
  } else {
    let pow2 = 2;
    while (pow2 * 2 <= A) {
      pow2 = pow2 * 2;
    }

    if (pow2 == A) {
      return 1;
    }

    return 1 + 2 * (A - pow2);
  }
};

console.log(solve(4));
