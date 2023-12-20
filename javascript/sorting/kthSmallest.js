const solve = (A, B) => {
  count = 0;

  const swap = (A, i, j) => {
    [A[i], A[j]] = [A[j], A[i]];
  };

  for (let i = 0; i < A.length - 1; i++) {
    min = A[i];
    index = i;
    for (let j = i + 1; j < A.length; j++) {
      if (min > A[j]) {
        min = A[j];
        index = j;
      }
    }
    count++;
    swap(A, i, index);

    if (count == B) break;
  }

  return A[B - 1];
};

console.log(solve([2, 1, 4, 3, 2], 2));
