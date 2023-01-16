const solve = (A) => {
  A.sort((a, b) => {
    n1 = "" + a + b;
    n2 = "" + b + a;

    if (n1 > n2) return -1;
    else return 1;
  });

  return BigInt(A.joint('')).toString();
};
console.log(solve([0, 0, 0, 0, 0]));
