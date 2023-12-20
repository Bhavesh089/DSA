const solve = (n, r, m) => {
  //   const fact = (n, m) => {
  //     ans = 1;

  //     for (i = 2; i <= n; i++) {
  //       ans = (ans * i) % m;
  //     }
  //     return ans;
  //   };

  function fact(num) {
    if (num === 0 || num === 1) return 1;
    r = 1;
    for (var i = num; i >= 1; i--) {
      r = (i * r) % m;
    }
    return r;
  }

  const fastPow = (a, n, m) => {
    // console.log(a, n, m);
    // console.log(a, n, m);
    if (n == 0) {
      return 1;
    }
    temp = fastPow(a, Math.floor(n / 2), m);

    temp = Number(BigInt(temp * temp)) % m;

    if (n & 1) {
      return ((a % m) * temp) % m;
    } else {
      return temp % m;
    }
  };

  a = fact(n, m) % m;
  b = fastPow(fact(n - r, m), m - 2, m) % m;
  c = fastPow(fact(r, m), m - 2, m) % m;

  console.log(Math.pow(r, m - 2), "power funciton");

  console.log(a, b, c);

  return (a * b * c) % m;
  //   return fastPow(2, 20, 10000007);
};

console.log(solve(3, 2, 33));
