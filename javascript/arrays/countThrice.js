const countThrice = (A) => {

    b = []
    for(i=0; i < 32; i++){
        ones = 0
        for(let y of A){

            if( (y >> i & 1) == 1){
                ones += 1
            }
        }

        if(ones % 3 > 0){
            b.push(1)
        } else{
            b.push(0)
        }
    }

    n = 0

    if(b.length > 0){
        n = b[0]
    }

    for(j = 1; j < b.length; j++){

        if(b[j] == 1 ){
            n +=  1 << j
        }
    }

    return n 
}


console.log(countThrice([0, 0, 0, 1]))