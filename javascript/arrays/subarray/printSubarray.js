const solve = (arr) => {
  totalSum = 0;
  for (i = 0; i < arr.length; i++) {
    console.log("--->");
    sum = 0;

    for (j = i; j < arr.length; j++) {
      console.log(arr[j]);
      sum += arr[j];
      totalSum += sum;
      console.log(totalSum, "totalsum--->");
      console.log(sum, "sum-->");
    }
  }
};

const Opsolve = (arr) => {
  let totalSum = 0;
  let contri;
  for (i = 0; i < arr.length; i++) {
    contri = (i + 1) * (arr.length - i);
    totalSum += contri * arr[i];
  }

  return 10 ** 9 + (7 % totalSum);
};

// console.log(Opsolve([2, 4, 1]));
console.log(solve([2, 4, 1]));
