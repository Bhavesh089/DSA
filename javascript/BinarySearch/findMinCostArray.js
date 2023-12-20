const minCost = (C) => {

    for(let i = 0; i < C.length; i++){
        C[i].sort((a,b) => a-b)
    }

    let ans = Infinity
    for(let i = 0; i < C.length -1; i++){
        for(j = 0; j < C[0].length; j++){

            let low = 0
            let high = C[0].length -1
            let ge = C[0].length - 1
            let se = 0
            let num = C[i][j]
            while(low <= high){

                mid = low + Math.floor((high - low) / 2)

                if(num == C[i+1][mid]){
                    return 0
                }

                if(C[i+1][mid] > num){
                    ge = mid
                    high = mid - 1
                    
                }else{
                    se = mid
                    low = mid + 1
                }
                
            }

            ans = Math.min( Math.min(Math.abs(num - C[i+1][ge]), Math.abs(num - C[i+1][se])), ans)

            if(ans == 0){
                return 0
            }
        }
    }

    return ans 
}


console.log(minCost([ [7, 3],
    [2, 1],
    [4, 9] ]))