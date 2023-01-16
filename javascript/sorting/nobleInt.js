const solve = (A) => {
  b = A.sort();
  len = A.length;
  count = 1;
  
  for (let x = A.length - 2; x >= 0; x--) {
    console.log(x);
    if (b[x] != b[parseInt(x) + 1]) {
      if (b[x] == count) {
        return 1;
      }
    }
    count++;
  }

  return -1;
};

console.log(solve([-6, -4, -2, -1, 0]));
