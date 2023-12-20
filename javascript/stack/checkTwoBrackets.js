const twoBrackets = (A, B) => {

    const process = (str) => {

        let localOperator = '+'
        let gos = []
        let opArr = new Array(26).fill('+')

        for(let x = 0; x < str.length; x++){
            if(str[x] == '-' || str[x] == '+'){

                if(gos.length > 0){
                    localOperator = signChange(str[x], gos[gos.length - 1])
                } else {
                    localOperator = str[x]
                }
                continue
            }

            if(str[x] == '('){
                gos.push(localOperator)
                continue
            }

            if(str[x] == ')'){
                gos.pop()
                continue
            }

            opArr[str[x].charCodeAt() - 'a'.charCodeAt()] = localOperator
            console.log(str[x], str[x] - 'a', 'hello-->', str[x].charCodeAt() - 'a'.charCodeAt())

        }

        return opArr
    }
    

    const signChange = (op1, op2) => {

        if((op1 == '+' && op2 == '-') ||(op1 == '-' && op2 == '+') ){
            return '-'
        } 

    return '+'
    }
    let new1 = process(A)
    let new2 = process(B)

    console.log(new1, new2)
    for(let i = 0; i < A.length; i++){

        if(new1[i] != new2[i]){
            return 0
        }
    }

    return 1

}

console.log(twoBrackets("a-b-(c-d)","a-b-c-d"))