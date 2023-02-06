const sum = (A, s) => {
  if (A == 0) {
    return s;
  }
  i = A % 10;
  s += i;

  return sum(Math.floor(A / 10), s);
};

A = 4612;

console.log(sum(A, 0));
