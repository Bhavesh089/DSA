const solve = (A, B) => {
  let ans = [];
  for (let x = 0; x < B.length; x++) {
    let arr = [...A];
    for (let y = B[x]; y > 0; y--) {
      let a = arr.shift();
      arr.push(a);
    }
    ans.push(arr);
  }

  return ans;
};

console.log(solve([1, 2, 3, 4, 5], [2, 3]));
