function twoPairt(A, B)  {
    A.sort((a,b) => a - b)

    ans = 0
    i = 0
    j = A.length - 1
   
    let sum = A[i] + A[j]
    while( i <= j){
        // console.log(sum, i, j)
        if(sum < B){
            sum -= A[i]           
            i++
            sum += A[i]
        } else if(sum > B){
            sum -= A[j]
            j--
            sum += A[j]
        } else if(sum == B) {

            if(A[i] == A[j]){
               let x = j - i + 1
               let countSum = x * Math.floor((x - 1)/ 2)
               ans += countSum
               return ans
            } else {
                
                let a = 1
                let b = 1
                
                while(A[i] == A[i+1] && i < j){
                    a++
                    i++
                }
                
                while(A[j] == A[j-1] && i < j){
                    b++
                    j--
                }
                // console.log(a, b, sum, i, j,A,  'hello')
                let countABsum = a * b
                ans += countABsum

                sum -= A[i]           
                i++
                sum += A[i]
                sum -= A[j]
                j--
                sum += A[j]
            }
        }
        
    }
    
    return ans

}

console.log(twoPairt([14,16,15,12,1,20],16))