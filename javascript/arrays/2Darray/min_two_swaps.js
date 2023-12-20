const minSwaps = (A) => {

    count = 0
    for(i = 0; i < A.length; i++){

        if(A[i] != i){

            [A[i], A[A[i]] = A[A[i]], A[i]]
            count++
        }
    }

    return count - 1
}

console.log(minSwaps([0,6,5,4,3,1,2]))