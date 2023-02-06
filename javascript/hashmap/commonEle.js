const solve = (A, B) => {
  let b = {};
  let res = [];
  for (let x of A) {
    if (b.hasOwnProperty(x)) {
      b[x] += 1;
    } else {
      b[x] = 1;
    }
  }

  for (let y of B) {
    if (b.hasOwnProperty(y)) {
      res.push(y);
      b[y] -= 1;
      if (b[y] == 0) {
        delete b[y];
      }
    }
  }

  return res;
};

console.log(solve([2, 1, 4, 10], [3, 6, 2, 10, 10]));
