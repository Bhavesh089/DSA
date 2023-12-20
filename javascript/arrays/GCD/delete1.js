const solve = (A) => {
  let pf = [];
  let sf = [];

  pf[0] = A[0];
  sf[A.length - 1] = A[A.length - 1];
  const gcd = (a, b) => {
    if (b == 0) {
      return a;
    }
    return gcd(parseInt(b), parseInt(Math.floor(a % b)));
  };

  for (let x = 1; x < A.length; x++) {
    pf[x] = parseInt(gcd(pf[x - 1], A[x]));
  }
  for (let x = A.length - 2; x >= 0; x--) {
    sf[x] = parseInt(gcd(sf[x + 1], A[x]));
  }

  ans = Math.max(sf[1], pf[A.length - 2]);

  console.log(sf, pf);

  for (let x = 1; x < A.length - 1; x++) {
    curr = gcd(pf[x - 1], sf[x + 1]);
    ans = Math.max(ans, curr);
  }

  return ans;
};

console.log(solve([21, 7, 3, 42, 63]));
