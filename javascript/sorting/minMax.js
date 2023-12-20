const minMax = (A) => {
    A = A.sort((a, b) => a - b)

    min = 0
    max = 0

    for(let i =0; i < A.length; i+=2){
        min = (min + (Math.abs(A[i] - A[i+1]))) % 1000000007
    }

    for(let i =0; i < A.length / 2; i++){
        max = (max + (Math.abs(A[i] - A[A.length - i - 1]))) % 1000000007
    }

    return [max, min]


}

console.log(minMax([3, 11, -1, 5]))