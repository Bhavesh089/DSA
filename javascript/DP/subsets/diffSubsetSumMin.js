
// Tabulation
function tabulationSolve(m, target, dp) {
    for (let k = 0; k <= m; k++) {
        dp[k][0] = true;
    }

    dp[0][arr[0]] = true;

    for (let i = 1; i <= m; i++) {
        for (let j = 0; j <= target; j++) {
            let ans1 = dp[i - 1][j];
            let ans2 = false;
            if (j >= arr[i]) {
                ans2 = dp[i - 1][j - arr[i]];
            }
            dp[i][j] = ans1 || ans2;
        }
    }

    let min = Infinity
    for(let k = 0; k <= Math.floor(target / 2); k++){

        if(dp[m][k]){
            min = Math.min(min, Math.abs((target - k) - k))
        }
    }
    return min;
}
//Tabulation space optimization

function tabulationSpaceSol(m, target){
    let prev = Array.from(target+1).fill(true)
    prev[arr[0]] = true
    for (let i = 0; i <= m; i++) {
        curr = []
        for (let j = 0; j <= target; j++) {
            if(j == 0){
                prev[j] = true
                continue
            }
            let ans1 = prev[j];
            let ans2 = false;
            if (j >= arr[i]) {
                ans2 = prev[j - arr[i]];
            }
            curr[j] = ans1 || ans2;
        }

        prev = [...curr]
    }

    let min = Infinity
    for(let k = 0; k <= Math.floor(target / 2); k++){

        if(prev[k]){
            min = Math.min(min, Math.abs((target - k) - k))
        }
    }
    return min;

}
let arr = [1,2,3,4]
let target = 0

for(let x of arr){
    target += x
}
let dpTab = Array.from({ length: arr.length }, () => Array(target + 1).fill(false));
// console.log(tabulationSolve(arr.length - 1, target, dpTab));
console.log(tabulationSpaceSol(arr.length - 1, target));
