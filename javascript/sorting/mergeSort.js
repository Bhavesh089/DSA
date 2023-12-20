const solve = (A, B) => {
  const mergeSort = (A, B) => {
    n = A.length;
    m = B.length;

    i = 0;
    j = 0;

    sortArr = [];
    while (i < n && j < m) {
      if (A[i] < B[j]) {
        sortArr.push(A[i]);
        i++;
      } else if (B[j] <= A[i]) {
        sortArr.push(B[j]);
        j++;
      }
    }

    while (i < n) {
      sortArr.push(A[i]);
      i++;
    }
    while (j < m) {
      sortArr.push(B[j]);
      j++;
    }

    return sortArr;
  };

  return mergeSort(A, B);
};

console.log(solve([-4, -3, 0], [2]));
