const modSum = (A) => {
    p = 1000000007
    let freq = {}
    for(let f of A){

        freq[f] = freq[f] ? parseInt(freq[f]) + 1: 1
    }
    let sum = 0
    for(let i in freq){
        for( let j in freq){
            if(i != j){
                sum += ((i % j) * freq[i] * freq[j]) % p
            }
        }
    }

    return sum % p 
}

console.log(modSum([1,2,3]))