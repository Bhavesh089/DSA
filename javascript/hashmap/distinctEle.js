const solve = (A, B) => {
  res = [];
  i = 0;
  let b = new Map();
  for (j = 0; j <= A.length - 1; j++) {
    if (b.has(A[j])) {
      count = b.get(A[j]);
      b.set(A[j], count + 1);
    } else {
      b.set(A[j], 1);
    }

    if (j - i + 1 == B) {
      res.push(b.size);

      count = b.get(A[i]);
      count -= 1;
      if (count == 0) {
        b.delete(A[i]);
      } else {
        b.set(A[i], count);
      }

      i++;
    }
  }

  return res;
};

console.log(solve([1, 2, 1, 3, 4, 3], 3));
