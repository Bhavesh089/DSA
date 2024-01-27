
    //param A : array of integers
    //param B : array of integers
    //return a array of integer
    
const  solve = (A, B) => {
           
           let h = new Map()
           let op = []
           for(let i = 0; i < A.length; i++){
               if(h.has(A[i])){
                   let s = h.get(A[i])
                   let num = s[0]
                   num++
                   s[0] = num
                   h.set(A[i], s)
               } else {
                   let t = [1, false]
                   h.set(A[i], t)
               }
           }
           for(let j = 0; j < B.length; j++){
   
            if(h.has(B[j])){
                let times = h.get(B[j])
                for(let k = 0; k < times[0]; k++){
                    op.push(B[j])
                }
                times[1] = true
                h.set(B[j], times)
            }
        }


        let op2 = []
        for(let l  of h.keys()){
 
                let times = h.get(l)
                if(times[1] == false){
                for(let k = 0; k < times[0]; k++){
                    op2.push(l)
                }
                
            }
        }

        op2.sort((a, b) => a - b)
        return [...op, ...op2]
       }
   

console.log(solve([3,20,17,17], [5,9,20,11,6,18,7,13]))