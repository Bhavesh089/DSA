const random = (A) => {
  let ans = [[]],
    temp = [];
  A.sort((a, b) => a - b);
  function helper(arr, i, curr) {
    if (i == arr.length) {
      temp_arr = [...curr];
      ans.push(temp_arr);
      return;
    }
    curr.push(arr[i]);
    // ans.push(curr.slice());
    helper(arr, i + 1, curr);
    curr.pop();
    helper(arr, i + 1, curr);
  }
  helper(A, 0, temp);

  return ans;
};

console.log(random([1, 2, 3]));
