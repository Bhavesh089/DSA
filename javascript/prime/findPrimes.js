const primes = (A) => {

    const primes = new Array(A+1).fill(true)
    const primesList = []
    for(i=2; i*i <= A; i++){

        if(primes[i]){

            for(j = i*i; j <= A; j = j + i ){

                primes[j] = false
            }
        }
    }

    for(i = 2; i <= A; i++){
        if(primes[i]){
            primesList.push(i)
        }
    }


    return primesList
}

console.log(primes(216))