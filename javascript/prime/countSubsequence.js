const countSubsquence = (A) => {

    const sieve = (n) => {
        primes = new Array(n+1).fill(true)

        for(i=2; i*i <= n; i++){
            if(primes[i]){
            for(j=i*i; j <= n; j = j + i){
                primes[j] = false
            }
        }
    }
    primesList = []
    for(j = 2; j <= n; j++){

        if(primes[j]){
            primesList.push(j)
        }
    }   
    return primesList
}

    let maxNum = Math.max(...A)
    console.log(maxNum, "this is n")
    A.sort((a,b) => a - b)

    pf = sieve(maxNum)
    i = 0
    j = 0

    ans = 0
    while(i < pf.length){
        count = 0
        if(A[j] == 1) j++
            while(pf[i] > A[j] ){

                count++
                j++
            }
        console.log(count, "count")
        ans = ans + Math.pow(2, count) - 1

        i++
    }
    console.log(j, pf, ans, i)

    ans = ans + Math.pow(2, parseInt((A.length ) - j )) - 1 

    return ans 
}

console.log(countSubsquence([1, 2 ,3,4 ,5,6]))