const solve = (A, B, C) => {
    
  if (B == 0) {
    return 1;
  }

  temp = solve(A, B - 1, C);
  temp = (temp * temp) % C;
  if (B % 2 == 0) {
    return temp;
  } else {
    return (A * temp) % C;
  }
};

console.log(solve(0, 0, 1));
