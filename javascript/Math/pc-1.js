const solve = (n, r) => {
  let intA = Array(r + 1).fill(0);
  intA[0] = 1;
  temp = [1];
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= r; j++) {
      temp[j] = intA[j - 1] + intA[j];
    }
    intA = [...temp];
  }

  return intA[r];
};

console.log(solve(3, 2));
