const solve = (A) => {
  arrForm = [];

  for (let i of A) {
    arrForm = [...arrForm, ...i];
  }
  sum = 0;
  n = arrForm.length;
  console.log(arrForm);
  for (let j = 0; j < n; j++) {
    contri = j + 1 * n - j;
    sum += contri * arrForm[j];
  }
  return sum;
};

console.log(
  solve([
    [8, 9, 9, 1, 7],
    [5, 5, 10, 1, 0],
    [7, 7, 5, 8, 6],
    [7, 3, 7, 9, 2],
    [7, 7, 8, 10, 6],
  ])
);
