const solve = (A) => {
  const factors = [];
  const spf = (n) => {
    let numbers = Array(n + 1).fill(0);
    for (i = 2; i <= numbers.length - 1; i++) {
      numbers[i] = i;
    }

    for (i = 2; i * i <= n; i++) {
      if (numbers[i] == i) {
        for (j = i * i; j <= n; j += i) {
          if (numbers[i] == i) {
            numbers[j] = i;
          }
        }
      }
    }
    return numbers;
  };

  x = Math.max(...A);
  spfList = spf(x);

  for (let x of A) {
    countFactors = 1;
    while (x > 1) {
      f = spfList[x];
      c = 0;
      while (x % f == 0) {
        c++;

        x = Math.floor(x / f);
      }
      countFactors = countFactors * (c + 1);
    }

    factors.push(countFactors);
  }

  return factors;
};

console.log(solve([8, 9, 10]));
