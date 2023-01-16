const solve = (A) => {
  let ans = 0;
  for (let x of A) {
    ans = ans ^ x;
  }

  return ans;
};

console.log(solve([1, 2, 2, 3, 1]));
