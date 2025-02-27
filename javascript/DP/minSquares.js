const solve = (n) => {
    if(n == 0){
        return 0
    }
    let ans = Infinity
    for(let i = 1; i <= Math.sqrt(n); i++){

        let sum = (1 + solve((n - (i * i))))

        ans = Math.min(sum , ans)
    }
    return ans   
}


console.log(solve(8))