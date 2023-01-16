const solve = (A) => {
  s = A[0];
  r = "";
  for (let x in s) {
    t = s[x];
    bol = true;
    for (let y = 1; y < A.length; y++) {
      if (s[x] === A[y][x]) {
        continue;
      } else {
        bol = false;
        break;
      }
    }

    if (bol) {
      r += t;
    } else {
      return r;
    }
  }

  return r;
};

console.log(solve(["abab", "ab", "abcd"]));
