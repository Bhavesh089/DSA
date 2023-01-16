const solve = (A, B) => {
  s = {};

  for (let x of B) {
    temp = A - x;
    if (s.hasOwnProperty(temp)) {
      return 1;
    } else {
      s[x] = 1;
    }
  }

  return 0;
};

console.log(solve(21, [9, 10, 7, 10, 9, 1, 5, 1, 5]));
