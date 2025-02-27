//you have two transactions as limit find max profit if you buy and sell
function solve(m, buy, trans){

    if(m == n || trans == 0){
        return 0
    }
    let profit = 0
    if(buy){

         profit = Math.max(solve(m-1, false, trans) - arr[m], solve(m-1, true, trans))
    } else {
        profit = Math.max(solve(m-1, true, trans-1) + arr[m], solve(m-1, false, trans))
    }

    return profit
}

//you have two transactions as limit find max profit if you buy and sell
function solveMemoization(m, buy, trans, dp){

    if(m == n || trans == 2){
        return 0
    }
    if(dp[m][buy][trans] != -1){
        return dp[m][buy][trans]
    }
    let profit = 0
    if(buy){

         profit = Math.max(solve(m+1, false, trans) - arr[m], solve(m+1, true, trans))
    } else {
        profit = Math.max(solve(m+1, true, trans+1) + arr[m], solve(m+1, false, trans))
    }

    dp[m][buy][trans] = profit

    return dp[m][buy][trans]
}


function solveTabulation(m){

    const buy = 2
    const trans = 2
    let dp = Array.from({length: m+1}, () => Array.from({length: buy}, () => Array(trans+1).fill(0)))

    // if(m == n || trans == 0){
    //     return 0
    // } O(i * buy  * trans)

    for(i = n-1; i >= 0; i--){
        for(buy = 0; buy <= 1; buy++){
            for(trans = 1; trans <= 2; trans++){

                let profit = 0
                if(buy == 1){
            
                     profit =Math.max(dp[i-1][0][trans] - arr[i], dp[m+1][1][trans])
                } else {
                    profit = dp[i+1][1][trans+1] + arr[i], dp[m+1][0][trans]
                }
            }
            dp[m][buy][trans] = profit

            
        }
    }


    return dp[0][1][2]
}

function solve2Tabulation(m){

    const buy = 2
    const trans = 4
    let dp = Array.from({length: m+1}, () => Array(trans + 1).fill(0))

    // if(m == n || trans == 0){s
    //     return 0
    // } O(i * trans(4) -> b s b s 0 1 2 3 4)

    for(i = n-1; i >= 0; i--){
            for(trans = trans-1 ; trans >=  0; trans--){

                let profit = 0
                if( trans % 2 == 0){
            
                     profit =Math.max(dp[i+1][trans+1] - arr[i], dp[i+1][trans])
                } else {
                    profit = Math.max(dp[i+1][trans+1] + arr[i], dp[m+1][trans])
                }
                dp[i][trans] = profit
            }
           
    }


    return dp[0][0]
}


function solve2TabulationSpaceOptimization(m){

    const buy = 2
    const trans = 4
    let prev = Array(m+1).fill(0)

    // if(m == n || trans == 0){s
    //     return 0
    // } O(i * trans(4) -> buy sell buy sell 0 1 2 3 4)
        // space O(m + n) 

    for(i = n-1; i >= 0; i--){
        curr = []
            for(trans = trans-1 ; trans >=  0; trans--){

                let profit = 0
                if( trans % 2 == 0){
            
                     profit =Math.max(prev[trans+1] - arr[i], prev[trans])
                } else {
                    profit = Math.max(prev[trans+1] + arr[i], prev[trans])
                }
                curr[trans] = profit
            }
            prev = curr
    }


    return prev[0]
}






let dp = Array.from({length: m+1}, () => Array.from({length: 3}, () => Array(3).fill(-1)))