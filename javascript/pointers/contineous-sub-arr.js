const contSubArray = (A, B) => {

    i = 0
    j = 0
    sum = 0
    ans = []

    while(j < A.length){
        sum += A[j]
        if(sum > B){
            while(sum > B){
                sum = sum - A[i]
                i++
            }
            
        }

        if(sum == B){

            for(m = i ; m <= j; m++){
                ans.push(A[m])
            }
            return ans
        }

        j++

    }
    return -1
}

console.log(contSubArray([5, 10, 20, 100, 105], 110))