let A = [20, 12, 15, 19, 13, 5, 13, 12, 18];

if (A.length >= 2) {
  let secondMax = A[0];
  let firstMax = A[0];
  for (let x of A) {
    console.log(x, "no.");
    console.log(firstMax, "firstmax-->");
    console.log(secondMax, "secondMax----");
    if (x > firstMax) {
      secondMax = firstMax;
      firstMax = x;
    } else if (secondMax < x && firstMax > x) {
      secondMax = x;
    }
  }
  console.log(secondMax);
} else {
  console.log(-1);
}
return -1;
