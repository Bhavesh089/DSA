const luckyN = (A) => {

    
    const sieve = (A) => {
        const primes = []

        for(i = 0; i <= A +1; i++){

            primes.push(i)
        }

        for(i = 2; i*i<= A; i++){
            
            if(primes[i] == i){
                for(j= i * i; j <= A; j= j+i  ){
                    if(primes[j] == j){
                        primes[j] = i
                    }
                }                
       
        }
    }

    c = 0
    for(j = 2; j <= A; j++){

        storePrimes = new Set()
        
        curr = j
        while( curr !== 1){

            storePrimes.add(primes[curr])
            curr = curr / primes[curr]
        }

        if(storePrimes.size == 2){
            c++
        }
    }

    return c
}


return sieve(A)
}

console.log(luckyN(256))