// console.log(4 % 3);
// console.log(Math.floor(4 / 3));

const solve = (A, B) => {
  let rem = A % B;
  let div = Math.floor(A / B);
  let decimal = rem;
  count = 1;

  while (div > 0) {
    rem = div % B;
    div = Math.floor(div / B);
    decimal += rem * 10 ** count;
    count++;
  }

  return decimal;
};

console.log(solve(5, 3));
