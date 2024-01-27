const heapifyUp = (A, i, end) => {
    let largest = i
    while(true){

        let lst = 2*i + 1
        let rst = 2*i + 2
        largest = i

        if(lst < end && A[lst] > A[largest]){
            largest = lst
        }

        if(rst < end && A[rst] > A[largest] ){
            largest = rst
        }

        if(A[largest] != A[i] ){
            [A[largest], A[i]] = [A[i], A[largest]]
            i = largest
        }else{
            break
        }
    }
}   

const solve = (A) => {

    for(let j = Math.floor((A.length - 1)/ 2); j >= 0; j--){
        heapifyUp(A, 0, A.length)
    }
    for(let k = A.length - 1; k >= 0; k--){

        [A[0], A[k]] = [A[k], A[0]];
        heapifyUp(A, 0, k)
    }
    return A
}


console.log(solve([10,9,5,4,1]))