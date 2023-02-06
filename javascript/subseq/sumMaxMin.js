const solve = (A) => {
  mod = 1000000007;

  n = A.length;
  sortedA = A.sort((a, b) => b - a);
  console.log(sortedA);
  maxSum = MaxSum(sortedA, mod, n);

  minSum = MinSum(sortedA, mod, n);

  console.log(minSum, maxSum);

  return (maxSum - minSum + mod) % mod;
};

function MaxSum(sortedA, mod, n) {
  contri = 1 << (n - 1);
  sum = 0;
  for (i = 0; i < n; i++) {
    sum += (sortedA[i] * contri) % mod;

    sum = sum % mod;

    contri = contri >> 1; //2**n / 2
  }

  return sum;
}

function MinSum(sortedA, mod, n) {
  contri = 1 << (n - 1);
  console.log(contri);
  sum = 0;
  for (i = n - 1; i >= 0; i--) {
    sum += (sortedA[i] * contri) % mod;

    sum = sum % mod;

    contri = contri >> 1; //2**n / 2
  }

  return sum;
}

console.log(solve([5, 4, 2]));
