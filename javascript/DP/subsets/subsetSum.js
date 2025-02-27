let arr = [1, 2, 3, 4, 5];

// Recursion
function recursionSolve(m, target) {
    if (target == 0) {
        return true;
    }

    if (m == 0) {
        return target == arr[m];
    }

    let ans1 = recursionSolve(m - 1, target);
    let ans2 = false;
    if (target >= arr[m]) {
        ans2 = recursionSolve(m - 1, target - arr[m]);
    }

    return ans1 || ans2;
}

// Memoization
function memoizationSolve(m, target, dp) {
    if (target == 0) {
        return true;
    }

    if (m == 0) {
        return target == arr[m];
    }

    if (dp[m][target] != -1) {
        return dp[m][target];
    }

    let ans1 = memoizationSolve(m - 1, target, dp);
    let ans2 = false;
    if (target >= arr[m]) {
        ans2 = memoizationSolve(m - 1, target - arr[m], dp);
    }
    dp[m][target] = ans1 || ans2;
    return dp[m][target];
}

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

    return dp[m][target];
}

// Space-Optimized Tabulation
function spaceTabulation(m, target) {
    let prev = Array(target + 1).fill(false);
    prev[0] = true;

    for (let i = 0; i <= m; i++) {
        let curr = Array(target + 1).fill(false);
        curr[0] = true;

        for (let j = 0; j <= target; j++) {
            let ans1 = prev[j];
            let ans2 = false;
            if (j >= arr[i]) {
                ans2 = prev[j - arr[i]];
            }
            curr[j] = ans1 || ans2;
        }

        prev = curr;
    }

    return prev[target];
}

// Measure Execution Times
let start, recursionTime, memoizationTime, tabulationTime, spaceTabulationTime;

// Recursion
start = performance.now();
for (let target = 1; target <= 2000000; target++) {
    recursionSolve(arr.length - 1, target);
}
recursionTime = (performance.now() - start) / 1000; // Convert to seconds

// Memoization
start = performance.now(); // Reset timer
for (let target = 1; target <= 2000000; target++) {
    let dpMemo = Array.from({ length: arr.length }, () => Array(target + 1).fill(-1));
    memoizationSolve(arr.length - 1, target, dpMemo);
}
memoizationTime = (performance.now() - start) / 1000; // Convert to seconds

// Tabulation
start = performance.now(); // Reset timer
for (let target = 1; target <= 2000000; target++) {
    let dpTab = Array.from({ length: arr.length }, () => Array(target + 1).fill(false));
    tabulationSolve(arr.length - 1, target, dpTab);
}
tabulationTime = (performance.now() - start) / 1000; // Convert to seconds

// Space-Optimized Tabulation
start = performance.now(); // Reset timer
for (let target = 1; target <= 2000000; target++) {
    spaceTabulation(arr.length - 1, target);
}
spaceTabulationTime = (performance.now() - start) / 1000; // Convert to seconds

// Log Execution Times
// console.log(`Recursion Time: ${recursionTime.toFixed(4)} seconds`);
// console.log(`Memoization Time: ${memoizationTime.toFixed(4)} seconds`);
// console.log(`Tabulation Time: ${tabulationTime.toFixed(4)} seconds`);
console.log(`Space-Optimized Tabulation Time: ${spaceTabulationTime.toFixed(4)} seconds`);
