const solve = (A) => {
  v = ["a", "e", "i", "o", "u"];

  A += A;
  for (let x of A) {
    if (x >= "A" && x <= "Z") {
      A = A.replace(x, "");
    }
    if (v.includes(x)) {
      A = A.replace(x, "#");
    }
  }

  return A;
};

console.log(solve("AbcaZeoB"));
