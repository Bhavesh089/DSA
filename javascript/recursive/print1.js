function print(A) {
  if (A == 0) {
    return;
  }

  print(A - 1);
  process.stdout.write(A.toString() + " ");
  return;
}

function printR(A) {
  if (A == 0) {
    return;
  }

  process.stdout.write(A.toString() + " ");
  printR(A - 1);
  return;
}

print(10);
printR(10);
