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

function partiotion (A){
   
           const calSum1 = (curr) => {
   
               if(curr == null){
   
                   return 0
               }
               return calSum1(curr.left) + calSum1(curr.right) + curr.data 
           }
   
   const calSum2 = (curr) => {
       if (curr == null) {
           return 0;
       }
   
       const c = calSum2(curr.left) + calSum2(curr.right) + curr.data 
       console.log(c, '---->')
       if (c == Math.floor(sum / 2)) {
            ans = 1
       }

       return c 
   }
   
   
       var ans = 0
       let curr = A
       let curr1 = A
       let sum = calSum1(curr)
    //    console.log(sum)
       calSum2(curr1)
   
   
       return ans 
   
}


let a = [5,3,7,4,6,5,6]
let A = deserilize(a)
console.log(A)
console.log(partiotion(A))

   