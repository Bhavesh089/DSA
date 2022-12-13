const solve = (A, B) => {
  let ans = [];
  if (B <= 0) {
    for (let x in A) {
      ans.push(parseInt(x));
    }

    return ans;
  }
  let prev;
  let flag = true;
  let center = B;
  for (x = 0; x < A.length - 2 * B; x++) {
    // prev = 0;
    flag = true;
    for (y = x + 1; y < 2 * B + 1 + x; y++) {
      prev = A[y - 1];

      if (prev == A[y]) flag = false;
      // }
    }
    if (flag === true) {
      ans.push(center);
    }
    center++;
  }

  return ans;
};

console.log(solve([0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1], 1));
