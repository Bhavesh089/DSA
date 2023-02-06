function fact(A) {
  if (A == 0) {
    return 1;
  }

  return fact(A - 1) * A;
}

console.log(fact(10));
