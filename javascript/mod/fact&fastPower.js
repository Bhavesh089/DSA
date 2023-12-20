const factPower = (A,B) => {

    p = Math.pow(10, 9) + 7

    const factPow = (B, p) => {

        // if(B == 0){
        //     return 1
        // }

        // ans = factPow(B-1, p) % p 

        // return ((ans % p) * (B % p) ) % p
        // console.log(B, 9)
        let fact = 1
        for (let i = 2; i <= B; i++) {
        fact = (fact * i) % p; //mod-1 as per fermat’s theorem
        }
        return fact
    }

    const powerFunction = (A, b, p) => {

        // if(b === 0){

        //     return 1 % p
        // }

        // temp = powerFunction(A, Math.floor(b/2), p)

        // temp = ((temp % p)   * (temp % p)) % p
        
        // if(b & 1 == 1){
        //     return  ((A % p) * (temp % p)  ) % p
        // }

        // return (temp % p)

        if(b === 0n){

            return 1n % p
        }

        temp = powerFunction(A, b >> 1n, p)

        temp = ((temp % p)   * (temp % p)) % p
        
        if((b & 1n) == 1n){
            return  ((A % p) * (temp % p)  ) % p
        }

        return (temp % p)


    }

    const fact = factPow(B, 1000000006) 

    console.log(fact)

    const power = powerFunction(A, fact, p)

    return (power % p) % p 

}

console.log(factPower(2, 27))