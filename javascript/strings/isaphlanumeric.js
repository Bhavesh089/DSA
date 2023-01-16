const solve = (A) => {
  result = false;
  for (let x of A) {
    console.log(x);
    let num = false;
    let cap = false;
    let small = false;

    if (x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57) {
      num = true;
    } else if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) {
      cap = true;
    } else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
      small = true;
    }
    console.log(num, cap, small);
    if (num || cap || small) {
      continue;
    } else {
      return 0;
    }
  }

  return 1;
};

console.log(solve(["S", "c", "a", "l", "e", "r", "#", "2", "0", "2", "0"]));
