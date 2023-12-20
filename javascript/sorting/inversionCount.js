const solve = (A) => {
    const mergeSort = (A, n) => {
        if(n == 1){
            return 
        }

        mid = Math.floor(n/2)
        mergeSort(A,mid)
        
        merge(A, s = 0, mid, )

    }
    n = A.length 
    return mergeSort(A, n)
}