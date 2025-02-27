function solve(A, B){

    let alphabets = {}

    for(let i of A){

        if(alphabets[i]){
            alphabets[i] = alphabets[i] + 1
        } else {
            alphabets[i] = 1
        }
    }

    console.log(alphabets, 'this is alphae')
    for(let i of B){
        if(alphabets[i] != undefined){
            alphabets[i]--
        }
    }

    for(let i of Object.keys(alphabets)){

        if(alphabets[i] != 0){
            return 0
        }
}

return 1

}

console.log(solve("ylwfyulte", "bgipsvukg"))