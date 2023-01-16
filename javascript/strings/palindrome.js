const solve = (A) => {
  const isPalindrome = (s) => {
    i = 0;
    j = s.length - 1;

    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }

      i++;
      j--;
    }

    return true;
  };
  f = A;
  b = A;
  palidromeL = A[0];
  for (x = 0; x < A.length; x++) {
    l = A[x];
    for (y = x; y < A.length; y++) {
      l += A[y];
      if (isPalindrome(l)) {
        if (palidromeL.length < l.length) {
          palidromeL = l;
        }
      }
    }
  }

  return palidromeL;
};

const solve2 = (A) => {
  isPalindrome = (A, i, j) => {
    while (i >= 0 && j < A.length && A[i] == A[j]) {
      i--;
      j++;
    }
    return [i, j];
  };

  max = 0;
  f = A[0];
  for (x = 0; x < A.length; x++) {
    n = isPalindrome(A, x - 1, x + 1);
    s = A;
    // console.log(n[1] - n[0] - 1);

    if (max < n[1] - n[0] - 1) {
      //   console.log(A.slice(n[1], n[0] + 1));
      f = s.substring(n[0] + 1, n[1]);
      max = n[1] - n[0] - 1;
    }
  }

  //   for (x = 0; x < A.length; x++) {
  //     n = isPalindrome(A, x - 1, x + 1);
  //     s = A;
  //     if (max < n[1] - n[0] - 1) {
  //       f = s.substring(n[0] + 1, n[1]);
  //       max = n[1] - n[0] - 1;
  //     }
  //   }

  for (x = 0; x < A.length - 1; x++) {
    n = isPalindrome(A, x, x + 1);
    s = A;

    if (max < n[1] - n[0] - 1) {
      f = s.substring(n[0] + 1, n[1]);
      max = n[1] - n[0] - 1;
    }
  }

  return f;
};

console.log(solve2("abbcccbbbcaaccbababcbcabca"));
