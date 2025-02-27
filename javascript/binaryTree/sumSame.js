class Tree{
    constructor(data){

        this.data = data
        this.left = null
        this.right = null
    }
}

const deserilize = (A) => {
    let j = 0
    let node = new Tree(A[j])
    let q = [node]
    while(q.length > 0){

        s = q.length

        for(let i = 0; i < s; i++){
            let top = q[0]
            q.shift()
            j++
            top.left = A[j] > -1 ? new Tree(A[j]) : null
            j++
            top.right = A[j] > -1 ? new Tree(A[j]) : null
            if(top.left != null){
                q.push(top.left)
            }
            if(top.right != null){
                q.push(top.right)
            }
        }
    }

    return node
}

let sum = 0
let isFlag = true
const solve1 = (A) => {

    if(A == null){
        return 0
    }


    let lh = solve1(A.left)
    let rh = solve1(A.right)

    sum =  lh + rh + A.data
    console.log(sum, lh, rh, A.data, '--->')
    if(sum != A.data){
        isFlag = false
    }

    return sum 
}

let A = deserilize([24, 8, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1])
console.log(A)
console.log(solve1(A))

//  isFlag ==  true ? 1 : 0 
