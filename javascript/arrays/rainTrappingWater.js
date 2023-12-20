function rainTrap(A){

    l = 0
    r = A.length - 1
    lmax = 0
    rmax = 0

    while(l < r){

        if(A[l] < A[r]){

            if(A[l] > lmax){

                lmax = A[l] 
            } else{

                ans = lmax - A[l]
                result += ans
            }
            l++
        } else{
            if(A[r] > rmax){

                rmax = A[r] 
            } else{

                ans = rmax - A[r]
                result += ans
            }
            r--
        }
    }

    return result
}