function solve(i, j){

    if(i == j){
        return 0
    }
    min = Infinity
    for(let k = i; k < j; k++){

        ans = (arr[i-1]*arr[k]*arr[j])+ solve(i, k) + solve(k+1, j)

        min = Math.min(ans, min)

    }
    return min 
}

function solveRecursionMemoization(i, j, dp){

    if(i == j){
        return 0
    }
    if(dp[i][j] != -1){
        return dp[i][j]
    } 
    min = Infinity
    for(let k = i; k < j; k++){
        ans = (arr[i-1]*arr[k]*arr[j])+ solve(i, k) + solve(k+1, j)

        min = Math.min(ans, min)

        dp[i][j] = min
    }
    return dp[i][j] 
}

function tabulationSolve(){

    dp = Array.from({length: i}, () => Array(j).fill(Infinity))

    for(let i = 0; i < n; i++){
        dp[i][i] = 0
    }

    for(let i = n-1; i >= 0; i--){
        for(let j = i+1; j < n; j++){
            if(i != j){
                for(let k = i; k < j; k++){
                    ans = (arr[i-1]*arr[k]*arr[j])+ dp[i][k] + dp[k+1][j]
            
                    min = Math.min(ans, min)
                    dp[i][j] = min
                }
            }

        }
    }
    return dp[1][n-1]
}