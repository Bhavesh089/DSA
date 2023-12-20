function mergeIntervel(A){

    ans = []

    l = A[0][0]
    r = A[0][1]

    for(i = 1; i < A.length; i++){

        if(r > A[i][0]){

            if(r < A[i][1]){
                r = A[i][1]
            }
        } else{
            ans.push([l, r])

            l = A[i][0]
            r = A[i][1]
        }
    }

    ans.push([l, r])

    return ans
}