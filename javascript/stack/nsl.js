const nsl = (A) => {

    stack = []
    ans = []
    for(i = 0; i < A.length; i++){
        while(stack.length > 0 && stack[stack.length -1 ] >= A[i]){
            stack.pop()
        }

        if(stack.length == 0){
            ans.push(-1)
        } else {
            ans.push(stack[stack.length-1])
        }

        stack.push(A[i])
    }

    return ans 
}

console.log(nsl([39,27,11,4,24,32,32,1]))