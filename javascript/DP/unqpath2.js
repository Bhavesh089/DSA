/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// var uniquePathsWithObstacles = function(obstacleGrid) {
   

//    function solve(m, n){
//        if( m == 0 &&  n == 0 && obstacleGrid[m][n] == 0){
//            return 1
//        }

//        if(m < 0 || n < 0){
//            return 0
//        }
//        if( obstacleGrid[m][n] != 1){

//            return solve(m-1, n) + solve(m, n-1)
//        }
//        return 0
//    }

//    let m = obstacleGrid.length - 1
//    let n = obstacleGrid[0].length - 1
//    return solve(m, n)
// };


var uniquePathsWithObstacles = function(obstacleGrid) {
   

    function solveDp(m, n){



    let dp = Array.from({length: m }, () => Array(n).fill(0))

    if(obstacleGrid[0][0] != 1){
        dp[0][0] = 1
    }


        for(let i = 0; i <= m-1; i++){
            for(let j = 0; j <= n-1; j++){
                if(i == 0 && j == 0 && obstacleGrid[0][0] != 1){
                    dp[i][j] = 1
                    continue
                }
            
                if(obstacleGrid[i][j] != 1){

                    dp[i][j] = 0
                    if(i - 1 >= 0){
                        dp[i][j] += dp[i-1][j]
                    }
                    if(j-1 >= 0){
                        dp[i][j] += dp[i][j-1]
                    }
                } else {
                    dp[i][j] = 0
                }

            }
        }
        console.log(dp)
        return dp[m-1][n-1]
    }

    return solveDp(obstacleGrid.length, obstacleGrid[0].length)
 };
 

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))