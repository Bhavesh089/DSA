function solve(n, dp){
    if(n <= 1){
        return n
    }
    if(dp[n] != -1){
        return dp[n]
    }
    dp[n] = solve(n-1, dp) + solve(n-2, dp)
    return dp[n]
}

const n = 5
const dp = Array(n + 1).fill(-1)

console.log(solve(n, dp))
// console.log(dp, 'this is dp')