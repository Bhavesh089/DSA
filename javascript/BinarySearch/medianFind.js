const findMedianSortedRow = (A) => {
    n = A.length 
    m = A[0].length
    req = Math.floor((n *m) / 2) + 1
    low = 0
    high = -Infinity
    for(i = 0; i < n; i++){
        high = Math.max(high, A[i][m-1])
    }
    // console.log(low, high)
    while( low <= high){

        let mid = low + Math.floor((high - low) / 2)

        count = 0 

        for(let j = 0; j < A.length; j++){

            count += countReq(A[j], mid)
        }

        if(count >= req){
            ans = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }

    return ans 
}


const countReq = (arr, x) => {
    let i = 0
    let j = arr.length - 1

    let ans = -1
    while(i <= j){

        let mid = Math.floor((i + j) / 2)

        if(arr[mid] > x){

            ans = mid
            j = mid - 1
        }else{
            i = mid + 1
        }
    }

    if(ans == -1){
        return arr.length 
    }
    return ans 

    
}


console.log(findMedianSortedRow([[1, 3, 5],[2, 6, 9],[3, 6, 9]] ))