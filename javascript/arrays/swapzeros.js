const solve = (A) => {
  let sum = 0;
  for (let x of A) {
    sum = Number(sum) + Number(x);
  }
  let ans = 0;
  if (sum == A.length) {
    return ans;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] == 0) {
      l = i - 1;
      r = i + 1;
      count = 0;
      while (l >= 0 && A[l] == 1) {
        l--;
        count++;
      }

      while (r <= A.length - 1 && A[r] == 1) {
        r++;
        count++;
      }

      if (count < sum) {
        count++;
        ans = Math.max(ans, count);
      } else {
        ans = Math.max(ans, count);
      }
    }
  }

  return ans;
};

console.log(solve("00000011111111"));
