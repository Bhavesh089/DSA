const solve = (A, B, C) => {
  a = Number(BigInt(Math.pow(A % C, B % C) % C));
  console.log(a);
  ans = a % C;
  if (A < 0) {
    if (B & 1) {
      return ans + C;
    } else {
      return ans;
    }
  }

  return ans;
};

console.log(solve(71045970, 41535484, 64735492));
