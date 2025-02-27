
    //param A : integer
    //return an integer
    function colorful(A){
   
   
           let d = {}
            A = A.toString()
           for(let i = 0; i < A.length; i++){
   
               for(let j = i; j < A.length; j++){
   
                   let prod = 1
                   for(let k = i; k <= j; k++){
                       prod = A[k] * prod
                        console.log(A[k])
                   }

                   if(d[prod]){
                    return 0
                } else {
                    d[prod] = true
                }
               }
   
           }
   
           return 1
       }
   

console.log(colorful(23))