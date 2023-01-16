const solve = (A) => {
  let left = [];
  let right = [];
  let ans = [];
  for (i = 0; i < A.length; i++) {
    l = i - 1;
    r = i + 1;
    rp = 1;
    lp = 1;

    while (l >= 0) {
      lp = 1000000007 % (lp * A[l]);

      l--;
    }
    left.push(lp);

    while (r <= A.length - 1) {
      rp = 1000000007 % (rp * A[r]);
      r++;
    }
    right.push(rp);
  }

  console.log(left, right);

  for (j = 0; j < left.length; j++) {
    ans.push(1000000007 % (left[j] * right[j]));
  }

  return ans;
};

console.log(solve([9, 9, 9]));
