console.log("hello");

let i = 20;

for (let j = 1; j <= i; j++) {
  if ((j + "").length == 1) {
    j = "0" + j;
  }
  console.log(j);
}
