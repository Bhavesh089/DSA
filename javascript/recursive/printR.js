const reverse = (A, n) => {
  if (n == -1) {
    return;
  }

  console.log(A[n]);

  reverse(A, n - 1);
};

b = "scaleracademy";
reverse(b, b.length - 1);
