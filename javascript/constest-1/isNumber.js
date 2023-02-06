const solve = (A) => {
  sum = 0;
  ans = [];
  str = "";
  for (let i of A) {
    if (Number(i) && str.length > 0) {
      str += i;
    } else if (Number(i)) {
      str = i;
    } else {
      if (str.length > 0) {
        sum += parseInt(str);
      }

      str = "";
    }
  }

  return sum;
};

console.log(solve("a12b34c"));
