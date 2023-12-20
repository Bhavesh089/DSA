const searchSortedMatrix = (A, B) => {

    const binarySearch = (A, B) =>{

        low = 0
        high = A.length - 1

        while(low <= high){

            mid = Math.floor(low + ((high - low) / 2))

            if(A[mid] == B){
                return 1
            }
            else if(A[mid] < B){
                low = mid+1
            }else{
                high = mid - 1
            }
        }
        return 0
    }


    for(i = 0; i < A.length; i++){
        for(j = 0; j < A[0].length; j++){

            if(B >= A[i][0] && B <= A[j][A[i].length-1]){
                return binarySearch(A[i], B)
            }
        }
    }

    return 0
}


console.log(searchSortedMatrix([   
    [5, 17, 100, 111],
    [119, 120, 127, 131]   , 
  ], 3))