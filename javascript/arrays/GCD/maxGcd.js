const { gcd } = require("./gcd")

const maxGcd = (A, B) => {

    const gcdNum = gcd(A,B) 

    console.log(gcdNum)

    if( gcd(A, B) == 1){
        return A
    }

    console.log(gcdNum)

    for(x = gcdNum; x >= 1; x--){

        if(A % x == 0 && gcd(x,B)  == 1 ){
            console.log(x, B)
            return x
        }
    }

}


console.log(maxGcd(22, 38))