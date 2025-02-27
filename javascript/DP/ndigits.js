class Solution {
    constructor() {
        this.MOD = 1000000007;
    }

    helper(dp, A, B) {
        if (A === 0 && B === 0) {
            return 1;
        }
        if (B < 0 || A <= 0) {
            return 0;
        }
        if (dp[A][B] !== -1) {
            return dp[A][B];
        }
        let ans = 0;
        for (let i = 0; i < 10; i++) {
            ans += this.helper(dp, A - 1, B - i);
            ans %= this.MOD;
        }
        dp[A][B] = ans;
        return dp[A][B];
    }

    solve(A, B) {
        const dp = Array.from({ length: A }, () => Array(B).fill(-1));
        console.log(dp)
        let ans = 0;
        for (let i = 1; i < 10; i++) {
            ans += this.helper(dp, A - 1, B - i);
            ans %= this.MOD;
        }
        return ans;
    }
}

// Example usage:
const solutionObj = new Solution();
console.log(solutionObj.solve(2, 2));  // Output: 4
console.log(solutionObj.solve(1, 3));  // Output: 1
