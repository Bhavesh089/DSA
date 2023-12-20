const sumPrime = (A) => {


    const sieve = (A) => {
        const primes = new Array(A+1).fill(true)
        for(i=2; i*i <=A; i++){
            if(primes[i]){

                for(j=i*i; j <= A; j = i+j){

                    primes[j] = false
                }
            }
        }
        return primes
    }
    
    pf = sieve(A)

    primesList = [2,3,5,7]
    for(let x of primesList){

        result = A - x
        console.log(A, x, 'result --->', result)
        if(pf[result]){

            return [x, result]
        }
    }
}

console.log(sumPrime(216))