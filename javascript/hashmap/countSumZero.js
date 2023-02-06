const solve = (A) => {
  prefix = new Map();
  count = 0;
  sum = 0;
  prefix.set(0, 1);
  for (let x in A) {
    sum += A[x];
    if (prefix.has(sum)) {
      count += prefix.get(sum);
      prefix.set(sum, prefix.get(sum) + 1);
    } else {
      prefix.set(sum, 1);
    }
  }

  return count % 1000000007;
};

console.log(solve([1, -1, -2, 2]));
