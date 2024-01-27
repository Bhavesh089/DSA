const minheap = (A, i) => {

    let smaller = i
    let n = A.length 
    while(true){

        let left = 2*i + 1
        let right = 2*i + 2
        smaller = i

        if(left < n && A[left] < A[smaller]){

            smaller = left
        }

        if(right < n && A[right] < A[smaller]){
            smaller = right
        }

        if(smaller != i){

            [A[smaller], A[i]] = [A[i], A[smaller]]
            i = smaller
        } else {
            break
        }
    }

}


const solve = (A) => {

    for(let i = Math.floor((A.length/ 2))-1; i >= 0; i--){

        minheap(A, i)
    }
}
let A = [8, 20, 38, 44, 55, 65, 66, 79, 87, 68, 72, 5, 55, 61, 73, 89, 30, 73, 28, 73, 84, 96, 54, 82, 83, 15, 33, 38, 94, 100, 4, 22, 32, 42, 64, 86, 11, 78]

solve(A)
console.log(A)