function solveRecursion(m, prev){
    if(m == n){
        return 0
    }

    let ans1 = solveRecursion(m+1, prev)
    let ans2 = 0
    if(prev == -1 || arr[m] > arr[prev]){
         ans2 = solveRecursion(m+1, m) + 1
    }
    return Math.max(ans1, ans2)
}

function solveRecursionMemoization(m, prev, dp){
    if(m == n){
        return 0
    }
    if(dp[m][prev+1] != -1){
        return dp[m][prev]
    }
    let ans1 = solveRecursion(m+1, prev, dp)
    let ans2 = 0
    if(prev == -1 || arr[m] > arr[prev]){
         ans2 = solveRecursion(m+1, m, dp) + 1
    }
    dp[m][prev+1] = Math.max(ans1, ans2)
    return dp[m][prev+1]
}

function solveTabulation(){
    const dp = Array.from({length: n+1}, () => Array(n+1).fill(0))

    for(let i = n-1; i >= 0; i--){
        for(let j = i-1; j >= -1; j--){

            let ans1 = dp[i+1][j+1]
            let ans2 = 0
            if(j == -1 || arr[i] > arr[j]){
                 ans2 = dp[i+1][i+1] + 1
            }
            dp[i][j+1] = Math.max(ans1, ans2)
        }
    }

    return dp[0][0]
}

function anotherSolution(){
    let max = 1
    let dp = Array(n).fill(1)
    for(i = 1; i < n; i++){
        for(prev = 0; prev <= i-1; prev++){

            if(arr[i] > arr[prev] && 1 + dp[prev] > dp[i]){
                dp[i] = 1 + dp[prev]
            }
        }
        max = Math.max(dp[i], max)
    }
    return max
}
//print LIS
function printlisWithAnotherSolution(){
    let max = 1
    let dp = Array(n).fill(1)
    let hash = []
    let sum = 0
    let maxIdx = 0
    // for(let i in arr){
    //     hash[i] = sum
    //     sum++
    // }

    for(i = 0; i < n; i++){
        hash[i] = i
        for(prev = 0; prev <= i-1; prev++){
            if(arr[i] > arr[prev] && 1 + dp[prev] > dp[i]){
                dp[i] = 1 + dp[prev]
                hash[i] = prev
            }
        }
        if( dp[i] > max){
            maxIdx = i
            max = dp[i]
        }
    }
    // console.log(maxIdx, hash, dp)

    ans = []
    while(hash[maxIdx] != maxIdx){
        ans.push(arr[maxIdx])
        maxIdx = hash[maxIdx]
    }
    ans.push(arr[maxIdx])
    return ans.reverse()
}

function binarySearch(ans, target){
   
}

function binarySearchSol(){
    let sub = []; // Stores the LIS sequence
    
    for (let num of arr) {
        let left = 0, right = sub.length - 1;
        
        // Binary search to find the insertion point
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (sub[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        // If left is beyond the array, add new element
        if (left < sub.length) {
            sub[left] = num; // Replace element
        } else {
            sub.push(num); // Append element
        }
    }
    // console.log('sub pri',sub)
    return sub.length; // Length of LIS
}

const arr = [5,4,11,1,16,8]
const n = arr.length
const dp = Array.from({length: n}, () => Array(n+1).fill(-1))
console.log('Recursion', solveRecursion(0, -1))
console.log('Memoizatoin', solveRecursionMemoization(0, -1, dp))
console.log('tabulation', solveTabulation())
console.log('alternative sol', anotherSolution())
console.log('print LIS sol', printlisWithAnotherSolution())
console.log('LIS using binarySearch', binarySearchSol())