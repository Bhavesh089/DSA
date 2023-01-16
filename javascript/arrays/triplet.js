const solve = (A) => {
  let sum = 0;

  for (i = 0; i < A.length; i++) {
    let l = i - 1;
    let r = i + 1;
    let curr = A[i];
    let cl = 0;
    let cr = 0;
    while (l >= 0) {
      if (curr > A[l]) {
        cl += 1;
      }
      l--;
    }
    while (r <= A.length - 1) {
      if (curr < A[r]) {
        cr += 1;
      }
      r++;
    }

    sum += cl * cr;
    console.log(sum);
  }

  return sum;
};

console.log(solve([26, 23, 23, 16, 27, 18, 7]));
