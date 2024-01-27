const queueReverse = (A, B) => {

    s = []
    l = A.length
    for(let i = 0; i < l - B; i++){

        let t = A.pop()
        s.push(t)
    }
    A.reverse()
    for(let j = B; j < l; j++ ){
        t = s.pop()
        A[j] = t
    }
    return A
}


console.log(queueReverse([43,35,25,5,34,5,8,7], 6))