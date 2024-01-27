// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }


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
let A = deserilize([149, 88, 185, 44, 129, 162, 206, 24, 67, 109, 140, 152, 174, 201, 215, 12, 32, 58, 77, 92, 119, 130, 147, 150, 156, 167, 178, 193, 202, 214, 220, 6, 22, 26, 36, 48, 64, 71, 79, 90, 100, 115, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1])
//param, A : root node of tree
    //param B : integer
    //param C : integer
    //return an intege
function solve (A, B, C){

           const LCA = (A, B, C) => {
               
               let curr = A

               while(curr != null ){
                if (curr && B < curr.data && C < curr.data){
   
                    curr = curr.left
                }

               else if(curr && B > curr.data && C > curr.data){
                curr = curr.right
            } else {
                break
            }
               }

               return curr
           }
   
           const distanceTillNode = (parentNode, targetNode) => {
            let distanceTillParentNode = 0
               while(parentNode.data != targetNode){
                // console.log(targetNode, parentNode.data, distanceTillParentNode,'--->')
                // console.log(targetNode > parentNode.data,'--->')

                   if(targetNode < parentNode.data ){
                       parentNode = parentNode.left
                       distanceTillParentNode++
                   } else if(targetNode > parentNode.data) {
                       parentNode = parentNode.right
                       distanceTillParentNode++
                   }
               }

               return  distanceTillParentNode 
           }


           let parentNode = LCA(A, B, C)
           let s = distanceTillNode(parentNode, B)

           let a = distanceTillNode(parentNode, C)

           return s + a
       }
   

console.log(solve(A, 100, 115))