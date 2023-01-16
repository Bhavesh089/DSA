const solve = (A) => {
  maj = A[0];
  count = 1;

  for (i = 0; i < A.length; i++) {
    if (count == 0) {
      maj = A[i];
    }

    if (maj == A[i]) {
      count++;
    } else {
      count--;
    }
  }

  return maj;
};

console.log(solve([3, 2, 2, 4, 3, 3, 3, 3, 3]));
