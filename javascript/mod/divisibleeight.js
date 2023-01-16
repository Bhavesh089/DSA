const solve = (A) => {
  raise = 1;
  ans = 0;
  for (let x = A.length - 1; x >= 0; x--) {
    console.log(ans);
    ans = ans + ((A[x] * raise) % 8);
    raise = raise * 10;
  }
  console.log(ans);
  return ans % 8 == 0 ? 1 : 0;
};

console.log(solve("16"));
