const solve = (A, B) => {
  pf = [];

  A.reduce((a, b, i) => {
    pf[i] = a + b;
  }, 0);

  count = {};

  total = 0;

  for (let i of A) {
    let a = i % B;

    if (count.hasOwnProperty(a)) {
      count[a] += 1;

      total += count[a];
    } else {
      count[a] = 1;
    }
  }

  return total;
};

console.log(solve([2, 3, 1], 2));
