
    //param A : array of integers
    //return a strings
function solve(A){
   
           let j = 1
           let k = j + 1
           let isFlag = "YES"
           for(let i = 0; i < A.length - 2; i++){
            console.log(A[i], A[j], A[k])
               if(A[i] > A[j] && A[i] < A[k]){
                   j++
                   k++
                   isFlag = "NO"
               }else if(A[i] < A[j] && A[i] > A[k]){
                   j++
                   k++
                   isFlag = "NO"
               } else {
                   j++
                   k++
               }
           }
   
   
           return isFlag
}

console.log(solve([25,42,49,44,2]))