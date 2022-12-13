const solve = (A) => {
  const prefix = [];
  const sufix = [];

  A.reduce((a, b, i) => {
    return (prefix[i] = a * b);
  }, 1);

  sufix[A.length - 1] = A[A.length - 1];
  for (let x = A.length - 2; x >= 0; x--) {
    console.log(x);
    sufix[x] = sufix[x + 1] * A[x];
  }
  console.log(sufix);
  console.log(prefix);

  const ans = [];
  let left;
  let right;
  for (let i = 0; i <= A.length - 1; i++) {
    if (i == 0) {
      left = 1;
    } else {
      left = prefix[i - 1];
    }

    if (i == A.length - 1) {
      right = 1;
    } else {
      right = sufix[i + 1];
    }

    ans.push(left * right);
  }

  return ans;
};

console.log(solve([1, 2, 3, 4, 5]));
