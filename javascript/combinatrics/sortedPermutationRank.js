const sortedPermutationRank = (A) => {
    p = 1000003

    const fact = (num, p) =>{

        let factAns = 1
        for(let k = 2; k <= num; k++){

            factAns = (factAns * k) % p
        }

        return factAns
    }
    ans = 1

    for(let i = 0; i <= A.length - 1; i++){
        count = 0
        for(let j = i+1; j < A.length; j++){

            if(A[j] < A[i]){
                count++
            }
        }
        ans = (ans + (count * fact((A.length - i) - 1, p ))) % p

    }

    return ans % p

}
console.log(sortedPermutationRank("fcabb")/ 2)
console.log(sortedPermutationRank("fcab"))