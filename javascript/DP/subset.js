
// function solve2(arr, m, target){

//     if(target == 0){
//         return true
//     }
//     if(m == 0){
//         return arr[0] == target
//     }
//     ans1 = solve2(arr, m - 1, target)
//     ans2 = false
//     if(target >= arr[m]){
//         ans2 = solve2(arr, m - 1, target - arr[m])
//     }
//     return ans1 || ans2
// }

//memoization
function solve2(arr, m, target, dp){
    // console.log(arr, m, target, dp)
    if(target == 0){
        return true
    }
    if(m == 0){
        return arr[0] == target
    }
    // console.log(dp[m][target])
    if(dp[m][target] != - 1){
        return dp[m][target]
    }
    ans1 = solve2(arr, m - 1, target,dp)
    ans2 = false
    if(target >= arr[m]){
        ans2 = solve2(arr, m - 1, target - arr[m], dp)
    }
    dp[m][target] = ans1 || ans2
    return dp[m][target]
}


//tabulation 
function tabulationsolve2(arr, target, dp){
console.log(arr, target)
    for(let i = 1; i < arr.length; i++){
        for(let j = 1; j <= target; j++){
            ans1 = dp[i-1][j]
            ans2 = false
            // if(arr[i] <= j){
                ans2 = dp[i - 1][j - arr[i]]
            // }
            dp[i][j] = ans1 || ans2
        }
    }
    // console.log(dp)
    return dp[arr.length-1][target]
}

// function solve2(arr, m, target){

//     if(target == 0){
//         return true
//     }
//     if(m == 0){
//         return arr[0] == target
//     }
//     ans1 = solve2(arr, m - 1, target)
//     ans2 = false
//     if(target >= arr[m]){
//         ans2 = solve2(arr, m - 1, target - arr[m])
//     }
//     return ans1 || ans2
// }

// function tabulation(){
// }

function memoization(arr){
    for(let i = 1; i < 12; i++){
        let dp = Array.from({length: arr.length}, () => Array(i+1).fill(-1))
        console.log(solve2(arr, arr.length-1, i, dp))
    }
}

function tabulation(arr){
    for(let i = 1; i < 12; i++){
        let dp = Array.from({length: arr.length}, () => Array(i+1).fill(false))
        for(let j = 0; j < arr.length; j++){
            dp[j][0] = true
        }
        dp[0][arr[0]] = true
        console.log(dp)
        console.log(tabulationsolve2(arr, i, dp))
    }
}

const arr = [12,2,3,4]
const l = arr.length - 1
// console.log(memoization(arr))
console.log(tabulation(arr))
// console.log(solve2(arr, l, 9))
// console.log(solve2(arr, l, 8))
// console.log(solve2(arr, l, 7))
// console.log(solve2(arr, l, 6))
// console.log(solve2(arr, l, 5))
// console.log(solve2(arr, l, 4))
// console.log(solve2(arr, l, 3))
// console.log(solve2(arr, l, 2))
// console.log(solve2(arr, l, 1))
// console.log(solve2(arr, l, -11))
// console.log(solve2(arr, l, 11))