const nslandngl = (A, type) => {

    stack = []
    ans = []

    for(i = 0; i < A.length; i++){

        while(stack.length > 0  && (type == 'nsl' && A[stack[stack.length -1 ]] >= A[i]) || (type == 'ngl' && A[stack[stack.length -1 ]] <= A[i])){
            stack.pop()
        }
        if(stack.length == 0){
            ans.push(-1)
        } else {
            ans.push(stack[stack.length-1])
        }

        stack.push(i)
    }

    return ans 
}

const nsrandngr = (A, type) => {

    stack = [A.length]
    ans = []
    for(i = A.length-1; i >= 0; i--){

        while(stack.length > 0  && (type == 'nsr' && A[stack[stack.length-1]] >= A[i]) || (type == 'ngr' && A[stack[stack.length -1 ]] <= A[i])){

            stack.pop()   
        } 
        if(stack.length == 0){
            ans.push(-1)
        } else {
            ans.push(stack[stack.length-1])
        }

        stack.push(i)
    }

    return ans.reverse() 
}

const calculateMaxArea = (A) => {

    const nsr = nsrandngr(A, 'nsr')
    const nsl = nslandngl(A, 'nsl')
    let maxArea = -1
    for(let i = 0; i < A.length; i++){

        let width = (nsr[i] - nsl[i]) - 1
        let height = A[i]

        maxArea = Math.max(maxArea, width * height)
    }

    return maxArea
}

console.log(calculateMaxArea([2, 1, 5, 6, 2, 3]))
// console.log(nsrandngr([4, 5, 2, 10, 8], 'nsr'))