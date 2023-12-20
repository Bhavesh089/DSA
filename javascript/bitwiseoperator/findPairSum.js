const pairSum = (A) => {

    ans = 0
    for(i = 0; i < 32; i++){

        cz = 0
        co = 0

        for(let x of A){

            if((x >> i) & 1 >= 1){
                co++
            } else{
                cz++
            }
        }
        mul = cz * co
        ans += mul * 2
    }

    return ans
}

console.log(pairSum([6,9,1,4,7]))