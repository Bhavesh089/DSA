const solve = (A) => {
  b = A.split(" ");
  r = "";
  for (let x = b.length - 1; x >= 1; x--) {
    r += b[x];
    r += " ";
  }
  r += b[0];
  return r;
};

console.log(solve("the sky is blue"));
