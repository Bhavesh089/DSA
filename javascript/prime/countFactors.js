const solve = (A) => {
  count = 0;

  for (i = 1; i * i <= A; i++) {
    if (A % i == 0) {
      if (i == Math.floor(A / i)) {
        count += 1;
      } else {
        count += 2;
      }
    }
  }

  return count;
};
