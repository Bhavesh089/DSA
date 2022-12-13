const solve = (A, B) => {
  const n = A.length;

  let i = 0;

  let totalSum = 0;
  for (let i = 0; i < B; i++) {
    totalSum += A[i];
  }

  let maxSum = totalSum;

  let j = B - 1;
  let k = A.length - 1;
  while (j >= 0) {
    totalSum -= A[j];
    totalSum += A[k];
    maxSum = Math.max(maxSum, totalSum);
    j -= 1;
    k -= 1;
  }

  return maxSum;
};

console.log(
  solve(
    [
      -533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173,
      961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708, -618, 421,
      -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35, 894, -297,
      811, 322, -667, 673, -336, 141, 711, -747, -132, 547, 644, -338, -243,
      -963, -141, -277, 741, 529, -222, -684, 35,
    ],
    48
  )
);
