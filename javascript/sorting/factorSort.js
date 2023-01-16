const solve = (A) => {
  let res = [];
  const countFactor = (n) => {
    count = 0;
    for (let x = 1; x <= n; x++) {
      if (x > Math.floor(n / x)) {
        break;
      }

      if (n % x == 0) {
        if (Math.floor(n / x) == x) {
          count++;
        } else {
          count += 2;
        }
      }
    }

    return count;
  };
  for (let y of A) {
    res.push(countFactor(y));
  }

  return res.sort();
};

console.log(solve([6, 8, 9]));
