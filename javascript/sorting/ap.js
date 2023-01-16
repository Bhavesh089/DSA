const solve = (A) => {
  A = A.sort((a, b) => a - b);

  console.log(A);
  initialVal = Math.abs(A[0] - A[1]);

  for (x = 2; x < A.length; x++) {
    val = Math.abs(A[x] - A[x - 1]);

    if (val != initialVal) {
      return -1;
    }
  }
  return 1;
};

console.log(
  solve([
    -251, -305, -323, -53, -215, -143, -107, -161, -179, -431, -449, -17, -341,
    -413, -35, -125, -197, -377, -269, -71, -359, -89, -233, -287, -395,
  ])
);
