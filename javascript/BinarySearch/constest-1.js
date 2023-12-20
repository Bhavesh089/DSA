function search(A, B){
	    
    //find pivot point in the array
    
    const pivot = (A) => {
        
        let l = 0
        let h = A.length - 1
        
        while(l <= h){
            
            let mid = Math.floor((l + h) /2)
            
            if(mid > 0 && A[mid] < A[mid - 1]){
                return mid
            }
            
            else if(A[mid] > A[A.length - 1]){
                
                l = mid + 1
                
            } else {
                
                h = mid - 1
            }
        }

        return 0 
    }
    
    const start = pivot(A)

    console.log(start)
    
    let i
    let j
    if(B > A[A.length - 1]){
         i = 0
         j = start - 1
    } else {
         i = start
         j = A.length - 1
    }

    while(i <= j){
        
        let mid = Math.floor((i + j) / 2)
        
        if(B == A[mid]){
            return mid
        }
        
        else if(B < A[mid]){
            
            j = mid - 1
        }
        else{
            
            i = mid + 1
        }
    }
    
    return -1
}

console.log(search([1,2,4,6,9], 4))