const threesum = (A, B) => {

    A = A.sort((a, b) => a - b)
    ans = Infinity
    for(i = 0; i < A.length; i++){
        j = i+1
        k = A.length - 1
        while(j < k){
            sum = A[i] + A[j] + A[k]
            
            if(Math.abs(sum - B) < Math.abs(ans - B)){
                ans = sum
            }

            if(sum < B){
                j++
            }
            else if(sum > B){
                k--
            }else{
                return sum
            }
        }
    }
    return ans
}

console.log(threesum([-1, 2, 1, -4], 1))