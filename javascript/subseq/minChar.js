const solve = (A) => {
  minChar1 = "z";
  minChar2 = "z";
  let count = 0;
  for (let x = 0; x <= A.length - 2; x++) {
    if (minChar1 > A[x]) {
      minChar1 = A[x];
      count = x;
    }
  }

  console.log(count);
  for (let y = count + 1; y <= A.length - 1; y++) {
    if (minChar2 > A[y]) {
      minChar2 = A[y];
    }
  }

  return minChar1 + minChar2;
};
console.log(solve("dvdgajrqal"));
console.log("a" < "b");
