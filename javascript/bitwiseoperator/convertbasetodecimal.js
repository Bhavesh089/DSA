// const solve = (A, B) => {
//   let newString = A.toString();
//   let sum = parseInt(newString[newString.length - 1]);
//   let count = 1;
//   for (let i = newString.length - 2; i >= 0; i--) {
//     sum += parseInt(newString[i]) * B ** count;
//     count++;
//   }

//   return sum;
// };

const solve = (A, B) => {
  while (A > 0) {
    console.log(A % 10);
    A = Math.floor(A / 10);
  }
};

console.log(solve(223, 3));
