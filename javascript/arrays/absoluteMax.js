const absoluteMax = (A,B,C,D) => {

    res = 0
    n = A.length 

    for(let i = 0; i < 16; i++){
        min = Infinity
        max = -Infinity
        for(let j = 0; j < n; j++){
            curr = A[j]
            for(let k = 0; k < 4; k++){

                if(k == 0){
                   temp = B[j]
                }
                else if(k == 1){
                    temp = C[j]
                }
                else if(k == 2){
                    temp = D[j]
                }
                else{
                    temp = j
                }

                console.log(i, 1 << k, i & (1 << k) )
                if(i & (1 << k)){
                    console.log('if case')
                    curr += temp
                }else{
                    console.log('else case')
                    curr -= temp
                }
            }

            max = Math.max(max, curr)
            min = Math.min(min, curr)
        }

        res = Math.max(res, max - min)
    }

    return res
}

A = [1, 2, 3, 4]
 B = [-1, 4, 5, 6]
 C = [-10, 5, 3, -8]
 D = [-1, -9, -6, -10]

console.log(absoluteMax(A, B, C, D))