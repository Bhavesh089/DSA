const parathensis = (A) => {

    o = A
    c = A
    result = []
    op = ""

    const recursive = (o, c, op, result) => {
        if(o == 0 && c == 0){
            result.push(op)
            return 
        }

        if(o != 0){
            op1 = op + "("
            recursive(o-1, c, op1, result)
        }

        if(c > o){
            op2 = op + ")"
            recursive(o, c-1, op2, result)
        }
    }

    recursive(o, c, op, result)
    return result
}


console.log(parathensis(3))