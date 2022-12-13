const solve = (A) => {
  const max = A.reduce((m, e) => (e > m ? e : m));
  const min = A.reduce((m, e) => (e < m ? e : m));

  if (min == max) {
    return 1;
  }
  console.log(min, max);
  let maxIndex = -1;
  let minIndex = -1;
  let trackMin = A.length;
  for (let x = A.length - 1; x >= 0; x--) {
    if (max == A[x]) {
      maxIndex = x;
      if (minIndex != -1) {
        let smallLength;
        if (maxIndex > minIndex) {
          smallLength = maxIndex - minIndex + 1;
        } else {
          console.log(maxIndex, minIndex);
          smallLength = minIndex - maxIndex + 1;
        }

        if (smallLength < trackMin) {
          trackMin = smallLength;
        }
      }
    } else if (min == A[x]) {
      //   console.log(min);
      minIndex = x;
      if (maxIndex != -1) {
        let smallLength;
        if (maxIndex > minIndex) {
          smallLength = maxIndex - minIndex + 1;
        } else {
          smallLength = minIndex - maxIndex + 1;
        }
        if (smallLength < trackMin) {
          trackMin = smallLength;
        }
      }
      //   console.log(maxIndex);
    }
  }

  return trackMin;
};

console.log(solve([834, 563, 606, 221, 165]));
