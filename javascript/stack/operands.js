function operands(A){

        let s = []

        for(let x of A){

            if(!isNaN(x)){
                s.push(x)
            } else {
                console.log(s)
                let b = parseInt(s.pop())
                let a = parseInt(s.pop())
                let result
                if(x == "+"){
                    result = a + b 
                } else if(x == '*'){
                    result = a * b
                } else if (x == '/'){
                    result = Math.floor(a / b)
                } else if( x == '-'){
                    result = a - b
                }
                s.push(result)
            }
        }

        return s[s.length - 1]
}

A = ["4", "13", "5", "/", "+"]
console.log(operands(A))