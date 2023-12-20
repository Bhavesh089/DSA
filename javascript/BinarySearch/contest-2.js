 function solve (A){
	    
    A = A.sort((a, b) => a - b)
    negatives = 0
    countN = 0
    j = 0

    let ans = 1

    while(countN < 3){
        if(A[countN] < 0){

            negatives++
        }
        j++
        countN++
    }
    console.log(negatives)
    if(negatives == 1 || negatives == 2){

        ans = A[0]
        let i = A.length - 1

        let count = 0

        while(count < 2){

            if(A[i] != 0){

                ans = ans * A[i]
                count++
            }
            i--
        }
    } else if(negatives == 0){
        ans = 1
        let i = 1
   
        let count = 0

        while(count < 3){

            if(A[i] != 0){

                ans = ans * A[i]
                count++
            }
            i++
        }
        console.log(ans)
    }else if(negatives > 2){
        let ans1 = A[0]
        let i = 1
        let count = 0
        while(count < 2){
            if(A[i] != 0){
                ans1 = ans1 * A[i]
                count++
            }
            i++
        }
        console.log(ans1)
        i = A.length - 1
        let ans2 = A[0]
        count = 0
        while(count < 2){
            if(A[i] != 0){
                ans2 = ans2 * A[i]
                count++
            }
            i--
        }
        ans = Math.min(ans1, ans2)
    }
    return ans
}

console.log(solve([10,8,3,-9,0]))