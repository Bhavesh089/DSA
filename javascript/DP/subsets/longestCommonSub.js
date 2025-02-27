//lcs
//str1 = "abcd"
//str2 = "abc"

function solveRecursion(m, n){

    if(m < 0 || n < 0){
        return 0
    }
    if(str1[m] == str2[n]){

        return solveRecursion(m-1, n-1) + 1
    }

    return Math.max(solveRecursion(m-1, n), solveRecursion(m, n-1))

}

//memoization
function solveMemoization(m, n, dp){
    if(m <0 || n < 0){
        return 0
    }

    if(dp[m][n] != -1){
        return dp[m][n]
    }

    if(str1[m] == str2[n]){
        dp[m][n] = solveRecursion(m-1, n-1) + 1
        return dp[m][n]
    }
    dp[m][n] =  Math.max(solveRecursion(m-1, n), solveRecursion(m, n-1))
    return dp[m][n]
}

//tabulation

function tabulation(m, n){

    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0))

    for(let i = 1; i <= m; i++){
        for(j = 1; j <= n; j++){

            if(str1[m-1] == str2[n-1]){
                dp[m][n] = 1 + dp[m-1][n-1]
            }

            dp[m][n] = Math.max(dp[m-1][n](m-1, n), dp[m][n-1])
        }
    }

    return dp[m][n]

}


