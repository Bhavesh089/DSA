
function insert(val) {
    this.heapifyUp()
}

function getMax(A) {

    if (A.length == 0) {
        return null
    }

    if (A.length == 1) {
        return A    }

    let max = A[0]

    A[0] = A.pop()
    heapifyDown(A, 0)
    return max
}

const heapifyDown = (A, i) => {

    let smaller = i
    let n = A.length 
    while(true){

        let left = 2*i + 1
        let right = 2*i + 2
        smaller = i

        if(left < n && A[left] > A[smaller]){

            smaller = left
        }

        if(right < n && A[right] > A[smaller]){
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


const heapifyUp =(A) =>{
    let i = A.length - 1
    while( i > 0){

        let p = Math.floor((i - 1) / 2)

        if(A[p] > A[i]){
            [A[p], A[i]] = [A[i], A[p]]
            i = p 
        } else {
            break
        }
    }
}

let A = [3, 5, 7, 1, 4, 2, 8, 6]
for(let i = Math.floor((A.length - 1)/ 2); i >= 0; i--){
    heapifyDown(A, i)
    // console.log(A)
}
console.log(A)

while(A.length > 1){

    let a = getMax(A)
    let b = getMax(A)
    if(a >= b){
        if(a != b){
            let y = a - b
            console.log(y, A)
            A.push(y)
            heapifyUp(A)
        }
    }
}
console.log(A)
if(A.length == 0){
    console.log(0)
} else {
    console.log(A[0], '--')
}