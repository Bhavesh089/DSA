function solve(){
    let curr = arr[0]
    let sum = 0
    for(i = 1; i < arr.length; i++){
        if(curr > arr[i]){
            curr = arr[i]
        } else if(arr[i] > curr){
            sum += arr[i]-curr
            curr = arr[i]
        }
        // buyPrice = arr[i]
    }
    return sum 
}

function solveRecursion(m, buy){
    if(m == n){
        return 0
    }
    let profit = 0
    if(buy){
        profit = Math.max(solve(m+1, false) - arr[m], solve(m+1, true) + 0)
    } else {
        profit = Math.max(solve(m+1, true) + arr[m], solve(m+1, false) + 0)
    }
    return profit
}

function solveDpRecursion(m, buy, dp){
    if(m == n){
        return 0
    }

    if(dp[m][buy] != -1){
        return dp[m][buy]
    }

    let profit = 0
    if(buy){
        profit = Math.max(solve(m+1, false) - arr[m], solve(m+1, true) + 0)
    } else {
        profit = Math.max(solve(m+1, true) + arr[m], solve(m+1, false) + 0)
    }
    dp[m][buy] = profit
    return  dp[m][buy]
}


function solveTabulation(){

    let dp = Array.from({length: arr.length + 1}, () => Array(3).fill(0))
    // console.log(dp)
    dp[n][0] = 0
    dp[n][1] = 0

    for(i = n-1; i >=0 ; i--){
        for(j = 0; j <= 2; j++){
            let profit = 0
            if(j == 1){
                profit = Math.max(dp[i+1][0] - arr[i],  dp[i+1][1])
            } else {
                profit = Math.max(dp[i+1][1] + arr[i], dp[i+1][0] + 0)
            }
            dp[i][j] = profit
        }
    }

    return dp[0][1]

}


function solveTabulationSpaceOptimization(){

    let ahead =  Array(arr.length + 1).fill(0)
    // console.log(dp)
    ahead[0] = 0
    ahead[1] = 0

    for(i = n-1; i >=0 ; i--){
        curr = []
        for(j = 0; j <= 2; j++){
            let profit = 0
            if(j == 1){
                profit = Math.max(ahead[0] - arr[i],  ahead[1])
            } else {
                profit = Math.max(ahead[1] + arr[i], ahead[0] + 0)
            }
            curr[j] = profit
        }
        ahead = curr
    }

    return ahead[1]

}
const arr = [1,2,3,4,5]
const n = arr.length
let dp = Array.from({length: n + 1}, () => Array(3).fill(-1))
// console.log(solveRecursion(0, true, dp))
console.log(solveTabulationSpaceOptimization())
// console.log(solve())