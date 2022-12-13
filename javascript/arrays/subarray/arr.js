const solve = (A) => {
  let subArr = [];
  let arr;
  for (i = 0; i < A.length; i++) {
    for (j = i; j < A.length; j++) {
      arr = [];
      for (k = i; k <= j; k++) {
        arr.push(A[k]);
      }
      subArr.push(arr);
    }
  }

  return subArr;
};
console.log(solve([1, 0, 1, 0, 1]));
