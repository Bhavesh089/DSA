const cns = (A)=> {

    j = 1 
    i = 1

    ans = 0
    count = 0
    while(j<= A){

        ans = ans + j

        if(ans > A){

            while(ans > A){
                
                ans = ans - i

                i++
            }
        }

        if(ans == A){

            count++
        }

        j++
    }

    return count 

}


const cns2 = (A) => {

    count = 0
    for(let k = 1; k <= Math.sqrt(2 * A); k++){

        t = A - k * (k - 1)/ 2

        if(t % k  == 0){
            count++
        }
    }

    return count
}

console.log(cns(3))
console.log(cns2(3))
