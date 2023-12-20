const solve = (arr) => {
  const swap = (arr, l, r) => {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  };
  const rearrange = (arr, s, e) => {
    let l = s + 1;
    let r = e;
    let pivot = s;
    while (l <= r) {
      if (arr[pivot] >= arr[l]) {
        l++;
      } else if (arr[pivot] < arr[r]) {
        r--;
      } else {
        swap(arr, l, r);
      }
    }
    swap(arr, pivot, r);

    return r;
  };

  const quickSort = (arr, s, e) => {
    if (s == e || s > e) {
      return;
    }

    p = rearrange(arr, s, e);

    quickSort(arr, s, p - 1);
    quickSort(arr, p + 1, e);
  };
  let s = 0;
  let e = arr.length - 1;
  quickSort(arr, s, e);
  return arr;
};

console.log(solve([5, 2, 0, 8, 3]));
