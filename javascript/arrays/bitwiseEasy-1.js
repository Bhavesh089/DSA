const bitwiseEasy = (A) => {

    ans = 0

    for(i = 30; i >= 0; i--){
        count = 0
        for(j = 0; j < A.length; j++){
            if(A[j] >> i & 1 == 1){
                count++
            }
        }

        if(count >= 2){

            ans = ans + (1 << i)
            
            for(k = 0; k < A.length; k++){
                console.log(A[k] >> i & 1)
                if((A[k] >> i  & 1) == 0){
                    A[k] = 0
                }
            }
        }
    }

    return ans
}


console.log(bitwiseEasy([38, 44, 84, 12]))