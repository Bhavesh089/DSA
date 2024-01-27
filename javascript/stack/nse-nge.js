const nslandngl = (A, type) => {

    stack = []
    ans = []

    for(i = 0; i < A.length; i++){

        while(stack.length > 0  && (type == 'nsl' && stack[stack.length -1 ] >= A[i]) || (type == 'ngl' && stack[stack.length -1 ] <= A[i])){
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

const nsrandngr = (A, type) => {

    stack = []
    ans = []
    for(i = A.length -1; i >= 0; i--){
        while(stack.length > 0  && (type == 'nsr' && stack[stack.length-1 ] >= A[i]) || (type == 'ngr' && stack[stack.length -1 ] <= A[i])){
            stack.pop()
        }

        if(stack.length == 0){
            ans.push(-1)
        } else {
            ans.push(stack[stack.length-1])
        }

        stack.push(A[i])
    }

    return ans.reverse()
}

console.log(nsrandngr([4, 5, 2, 10], 'ngr'))