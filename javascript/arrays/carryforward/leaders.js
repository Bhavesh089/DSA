const solve = (A) => {
  let maxNum = A[A.length - 1];
  let leaders = [A[A.length - 1]];
  for (let x = A.length - 2; x >= 0; x--) {
    if (maxNum < A[x]) {
      leaders.push(A[x]);
      maxNum = A[x];
    }
  }

  return leaders;
};

console.log(solve([16, 17, 4, 3, 5, 2]));
