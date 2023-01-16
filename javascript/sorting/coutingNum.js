const solve = (A) => {
  const counter = (n, A) => {
    let count = 0;

    for (let x of A) {
      if (x == n) {
        count++;
      }
    }

    return count;
  };

  A.sort((a, b) => {
    countA = counter(a, A);
    countB = counter(b, A);

    if (countA > countB) {
      return -1;
    } else if (countA < countB) {
      return 1;
    } else {
      return Number(a - b);
    }
  });

  return A;
};

console.log(solve([1, 2, 3]));
