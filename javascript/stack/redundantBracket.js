const redundunt = (A) => {
    let stack = []
    let isOpenBrace = false
    for(i = 0; i < A.length; i++){

        if(A[i] == ')'){
            flag = false
            while(stack[stack.length-1] != '('){
                flag = true
                stack.pop()
            }
            if(flag){
                stack.pop()
            }
        } else {
            if(A[i] == '('){
                isOpenBrace = true
            }
            if(A[i] >= 'a' && A[i] <= 'z' ){
                continue
            } else {
                stack.push(A[i])
            }
        }
    }
    return (stack.length > 0 & isOpenBrace) ? 1 : 0
}

console.log(redundunt('(a+(a+b))'))