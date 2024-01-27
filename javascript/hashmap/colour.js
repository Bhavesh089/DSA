const solve = (A) => {
    let s = A.toString()
    let t = new Set()
    for(let i = 0; i < s.length; i++){
        let p = 1
        for(let j = i; j < s.length; j++){
            p *= parseInt(s[j])
            if(t.has(p)){
                return 0
            }
        }
    }

    return 1
}

console.log(solve(3245))