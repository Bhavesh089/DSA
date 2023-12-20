const divide = (A, B) => {
    q = 0
    tot = 0
    for(i = 31; i >= 0; i--){
        if(tot + (B << i) <= A){
            tot += (B << i)
            A = (parseInt(A - (B << i)))
            q = q | (1 << i)
        }
    }
    console.log(q)
    if(A < 0 || B <0){
        q = -q
    }

    if( q > Infinity){
        return Infinity
    } else{
        return q
    }
}

console.log(divide(5,2))