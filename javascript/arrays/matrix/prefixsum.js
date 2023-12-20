const prefixSum = (arr) => {
  row = arr.length;
  col = arr[0].length;

  //rows

  for (let x = 0; x < row; x++) {
    for (let y = 1; y < col; y++) {
      arr[x][y] += arr[x][y - 1];
    }
  }

  for (let x = 0; x < col; x++) {
    for (let y = 1; y < row; y++) {
      arr[y][x] += arr[y - 1][x];
    }
  }

  ans = [];
};

console.log(
  prefixSum([
    [10, 20, 30],
    [5, 10, 20],
    [2, 4, 6],
  ])
);
