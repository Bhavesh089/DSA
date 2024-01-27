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

console.log(deserilize([1, 2, 3, 4, 5, -1, 6, -1, -1, -1, -1, -1, -1]))