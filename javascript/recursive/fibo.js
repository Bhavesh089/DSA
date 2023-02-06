function fibo(A) {
  if (A <= 0) {
    return 0;
  }

  if (A == 1) {
    return 1;
  }

  return fibo(A - 2) + fibo(A - 1);
}

console.log(fibo(9));
