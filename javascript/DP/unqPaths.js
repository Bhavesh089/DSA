function solve(m,n){
    if(m < 0 || n < 0){
        return 0
    }

    if(m == 0 && n == 0){
        return 1
    }

    l = solve(m - 1, n)

    r = solve(m, n-1)

    return l + r
}


function dpSolve(m,n, dp){
    if(m < 0 || n < 0){
        return 0
    }

    if(m == 0 && n == 0){
        return 1
    }

    if(dp[m][n] != -1){
        return dp[m][n]
    }

    l = solve(m - 1, n)

    r = solve(m, n-1)

    dp[m][n] = l + r
    return dp[m][n]
}


const m = 1
const n = 2
// console.log(solve(1,1))
// console.log(solve(0,0))
const dp = Array.from({length: m+1}, () => Array(n+1).fill(-1))

console.log(dp)
console.log(dpSolve(m, n, dp))