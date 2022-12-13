const maxProfit = (A) => {
  if (A.length === 0) {
    return 0;
  } else if (A.length === 1) {
    return A[0];
  } else {
    let maxProfit = 0;
    let maxProfitIndex;
    let minBuy = A[0];
    let currProfit;
    for (let x = 1; x <= A.length - 1; x++) {
      currProfit = A[x] - minBuy;

      if (maxProfit < currProfit) {
        maxProfit = currProfit;
        maxProfitIndex = x;
      }

      minBuy = Math.min(A[x], minBuy);
    }

    return maxProfit;
  }
};

console.log(maxProfit([1, 4, 5, 2, 4]));
