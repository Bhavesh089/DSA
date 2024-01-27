class Binary{

    constructor(node){

        this.data = node
        this.left = null
        this.right = null
    }
}


// const formTree = (inorder, postorder, il, ir, pl , pr, rootIndex) => {

//     if(il > ir){
//         return null
//     }

//     let root = postorder[pr]

//     let index = rootIndex[root]

//     let l = index - il

//     let node = new Binary(root)

//     node.left = formTree(inorder, postorder, il, index-1, pl, pl+l-1, rootIndex)
//     node.right = formTree(inorder, postorder, index+1, ir, pl+l+1, pr-1, rootIndex)

//     return node 
// }


// let rootIndex = {}

// let count = 0

// for(let x of B){

//     rootIndex[x] = count

//     count++
// }


const traverse = (A, B, il, ir, pl , pr, rootIndex) => {
    if(il > ir || pl > pr){
        return null
    }
    let root = A[pl]
    let i = rootIndex[root]
    let l = i - il 
    let node = new Binary(root)
    // console.log(nod)

    node.left = traverse(A, B, il, i-1, pl+1, pl+l, rootIndex)

    node.right = traverse(A, B, i+1, ir, pl+l+1, pr, rootIndex)

    return node 
}

A = [2, 1, 3]
B = [2, 3, 1]
// let rootIndex = {}
// count = 0
// for(let x of A){
//     rootIndex[x] = count
//     count++
// }
let rootIndex = {}

let count = 0

for(let x of B){

    rootIndex[x] = count

    count++
}

console.log(rootIndex)
a = traverse(A, B, 0, B.length - 1, 0, A.length - 1, rootIndex)
console.log(a)