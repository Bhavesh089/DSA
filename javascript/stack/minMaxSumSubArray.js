const nslandngl = (A, type) => {

    stack = []
    ans = []

    for(let i = 0; i < A.length; i++){

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
    for(let i = A.length-1; i >= 0; i--){

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


const minMax = (A) => {

    const ngl = nslandngl(A, 'ngl')
    const ngr = nsrandngr(A, 'ngr')

    const nsl = nslandngl(A, 'nsl')
    const nsr = nsrandngr(A, 'nsr')

    ans = BigInt(0)
    let mod7 = BigInt(1000000007);
    for(let i = 0; i < A.length; i++){
        let maxContri = (i - ngl[i]) * (ngr[i] - i)
        let minContri = (i - nsl[i]) * (nsr[i] - i)
        sum = (maxContri - minContri) * A[i]
        ans = ans + BigInt(sum)
    }

    return Number(ans % mod7)
}

console.log(minMax([4, 7, 3, 8]))