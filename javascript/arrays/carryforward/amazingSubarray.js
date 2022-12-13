const solve = (A) => {
  let j = A.length - 1;
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const ans = [];
  for (let x in A) {
    if (vowels.has(A[x])) {
      ans.push(j - x + 1);
    }
  }

  return ans.reduce((a, b) => a + b, 0) % 10003;
};

console.log(
  solve(
    "pGpEusuCSWEaPOJmamlFAnIBgAJGtcJaMPFTLfUfkQKXeymydQsdWCTyEFjFgbSmknAmKYFHopWceEyCSumTyAFwhrLqQXbWnXSn"
  )
);
