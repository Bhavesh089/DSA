const rev = (i, j, arr) => {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];

    i++;
    j--;
  }

  return A;
};
n = A.length - 1;
B = parseInt(n % n);
rev(0, n - 1, A);
rev(0, B - 1, A);
rev(n - B, n - 1, A);
console.log(A);
