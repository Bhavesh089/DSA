const flip = (A) => {

    maxSum = 0
    currSum = 0
    l = 0
    r = 0
    ans = []
    for(i = 0; i < A.length; i++){

        if(A[i] == 1){
            currSum--
        }else{
            currSum++
        }

        if(currSum > maxSum){

            maxSum = currSum
            ans[0] = l + 1
            ans[1] = r + 1
        }

        if(currSum < 0){

            currSum = 0
            l = i + 1
            r = i + 1
        } else{
            r++
        }
    }

    if(maxSum == 0){
        return []
    }
    return ans 
}

console.log(flip("010"))