const recursive = (A, B) => {
    let result = []
    const combination = (start, curr ) => {
        if(curr.length == B){
            result.push([...curr])
            return 
        }

        for(let i = start; i <= A; i++){
            curr.push(i)
            combination(i+1, curr)
            curr.pop()
        }
    }
    let curr = []
    combination(1, curr)
    return result
}


console.log(recursive(4,2))



// A = 3
// B = 2
// console.log(recursive(A, B))

