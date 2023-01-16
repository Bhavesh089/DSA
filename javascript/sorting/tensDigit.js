const solve = (A) => {
  A.sort((a, b) => {
    aten = Math.floor(a / 10) % 10;
    bten = Math.floor(b / 10) % 10;

    if (aten == bten) {
      return Number(b) - Number(a);
    }
    return aten - bten;
  });

  return A;
};

console.log(solve([15, 11, 7, 19]));
