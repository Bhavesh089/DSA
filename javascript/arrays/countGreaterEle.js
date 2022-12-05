let count = 0;
const A = [1, 2, 4, 5];

const max = A.reduce((m, e) => (e > m ? e : m));
console.log(max);

for (let x of A) {
  //   console.log(x);
  if (max == x) {
    count += 1;
  }
}
console.log(count);

console.log(parseInt(A.length - count));
