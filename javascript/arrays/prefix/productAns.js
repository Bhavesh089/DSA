const solve = (A) => {
  suffix = [];
  prefix = [];
  prefix[0] = A[0];
  suffix[A.length - 1] = A[A.length - 1];
  mod = Math.pow(10, 9) + 7;
  ans = [];

  for (x = 1; x < A.length; x++) {
    prefix[x] = (prefix[x - 1] * A[x]) % mod;
  }

  for (x = A.length - 2; x >= 0; x--) {
    suffix[x] = (suffix[x + 1] * A[x]) % mod;
  }

  for (i = 0; i < A.length; i++) {
    if (i == 0) {
      left = 1;
    } else {
      left = prefix[i - 1];
    }

    if (i == A.length - 1) {
      right = 1;
    } else {
      right = suffix[i + 1];
    }
    ans[i] = (left * right) % mod;
  }

  return ans;
};

console.log(solve([1, 2, 3, 4]));
