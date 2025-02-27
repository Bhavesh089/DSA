const candies = (A) => {
    let maxCandies =[]
    let lc = A[0]
    let curr = 1
    maxCandies[0] = 1
    for(let i = 1; i < A.length; i++){
        if(lc < A[i]){
            curr++
            lc = A[i]
            maxCandies.push(curr)
        } else if(lc == A[i]) {
            maxCandies.push(curr)
            lc= A[i]
        } else {
            curr = 1
            lc= A[i]
            maxCandies.push(curr)
        }  
    }
    let rc = A[A.length - 1]
    curr = 1
    maxCandies[A.length-1] = Math.max(maxCandies[A.length-1], curr) 
    for(let i = A.length-2; i >= 0; i--){
        if(rc < A[i]){
            curr++
            rc = A[i]
            maxCandies[i] = Math.max(maxCandies[i], curr)
        } else if(rc == A[i]) {
            maxCandies[i] = Math.max(maxCandies[i], curr)
            rc= A[i]
        } else {
            curr = 1
            rc = A[i]
            maxCandies[i] = Math.max(maxCandies[i], curr)
        }  
    }
    let sum = 0
    for(let j of maxCandies){
         sum = sum + j
    }
    return sum
}

console.log(candies([1, 5, 2, 1]))