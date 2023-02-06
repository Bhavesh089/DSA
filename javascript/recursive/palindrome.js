function palindrome(A, i, j) {
  //   console.log(i, j);
  if (A[i] != A[j]) {
    return 0;
  }

  if (i >= j) {
    return 1;
  }

  return palindrome(A, i + 1, j - 1);
}

A = "strings";
i = 0;
j = A.length - 1;
console.log(palindrome(A, i, j));
