const solve = (A) => {
  let i = 0;
  let j = 0;

  let ans = [];

  let subA = [];
  while (j < A.length) {
    if (A[j] < 0) {
      ans.push(subA);
      subA = [];
    } else {
      subA.push(A[j]);
    }

    j++;
  }
  ans.push(subA);

  console.log(ans);

  let max = -Infinity;
  let index;
  for (x in ans) {
    if (max < ans[x].length) {
      max = ans[x].length;
      index = x;
    }
  }

  return ans[index];
};

console.log(
  solve([
    -5173778, -8176176, 1694510, 7089884, -1394259, 1146372, -2502339, 1544618,
    6602022, 4330572,
  ])
);
