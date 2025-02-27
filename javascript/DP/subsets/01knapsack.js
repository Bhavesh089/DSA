//recursion
//maxwt
//arr

function recursionSolve(m, maxwt){
    if(m == 0){
        
        if(maxwt >= wt[m]){
            return val[m]
        }

        return 0
    }

    let ans1 = recursionSolve(m-1, maxwt)

    let ans2 = -Infinity

    if(maxwt >= wt[m]){
        ans2 = recursionSolve(m-1, maxwt - wt[m]) + val[m]
    }

    return Math.max(ans1, ans2)
}

//memoization
function memoizationSolve(m, maxwt, dp){
    if(m == 0){
        if(maxwt >= wt[m]){
            return val[m]
        }
        return 0
    }

    if(dp[m][maxwt] != -1){
        return dp[m][maxwt]
    }
    let ans1 = recursionSolve(m-1, maxwt)

    let ans2 = -Infinity

    if(maxwt >= wt[m]){
        ans2 = recursionSolve(m-1, maxwt - wt[m]) + val[m]
    }
    dp[m][wt] =  Math.max(ans1, ans2)
    return dp[m][wt]
}

//tabulation

function tabulationSolve(maxwt){

    let dp = Array.from({length: wt.length}, () => Array(maxwt + 1).fill(0))

    for(let k = wt[0]; k <= maxwt; wt++){
        dp[0][k] = wt[0]
    }

    for(let i = 1; i < wt.length; i++){
        for(let j = 0; j <= maxw; j++){

            let ans1 = dp[i-1][j]

    let ans2 = -Infinity

    if(j >= wt[m]){
        ans2 =  dp[i-1][j - wt[i]] + val[i]
    }
    dp[i][j] =  Math.max(ans1, ans2)
        }
    }
    return  dp[wt.length - 1][maxwt]
}
//tabulation space optimiztion
function tabulationSolveSpaceOptimization(maxwt){

    // let dp = Array.from({length: wt.length}, () => Array(maxwt + 1).fill(0))
    let prev = Array(maxwt + 1).fill(0)

    for(let k = wt[0]; k <= maxwt; wt++){
        prev[k] = wt[0]
    }

    for(let i = 1; i < wt.length; i++){
        let curr = []
        for(let j = 0; j <= maxwt; j++){

            let ans1 = prev[j]

    let ans2 = -Infinity

    if(j >= wt[m]){
        ans2 =  prev[j - wt[i]] + val[i]
    }
    curr[j] =  Math.max(ans1, ans2)
        }
        prev = [...curr]
    }

    return prev[maxwt]
}
//tabulation one row space optimization
function tabulationSolveSpaceOneRowOptimization(maxwt){

    // let dp = Array.from({length: wt.length}, () => Array(maxwt + 1).fill(0))
    let prev = Array(maxwt + 1).fill(0)

    for(let k = wt[0]; k <= maxwt; wt++){
        prev[k] = wt[0]
    }

    for(let i = 1; i < wt.length; i++){
        for(let j = maxwt; j >= 0; j--){

            let ans1 = prev[j]

    let ans2 = -Infinity

    if(j >= wt[m]){
        ans2 =  prev[j - wt[i]] + val[i]
    }
    prev[j] =  Math.max(ans1, ans2)
        }
    }

    return prev[maxwt]
}