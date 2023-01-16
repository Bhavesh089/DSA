const solve = (A) => {
  l = 0;
  h = A.length - 1;

  while (l <= h) {
    console.log(l, h);
    [A[l], A[h]] = [A[h], A[l]];

    l++;
    h--;
  }

  return A;
};
a = "scaler";
a[1] = "b";
console.log(a);

console.log(solve("scaler"));
