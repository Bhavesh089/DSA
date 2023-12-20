const btogether = (A, B) => {
    count = 0
    for(let x of A){
        if(x <= B){
            count++
        }
    }

    s = 0 
    e = 0
    ans = Infinity
    bad = 0
    while(e < A.length){

        if(A[e] > B){
            bad++
        }

        if(e - s + 1 == count){

            ans = Math.min(ans, bad)
            if(A[s] > B){
                bad--
            }
            s++
        }
        e++
    }


    return ans
}

console.log(btogether([1, 12, 10, 3, 14, 10, 5], 8))