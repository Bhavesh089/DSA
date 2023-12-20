const recursive = (A, B) => {
    result = []
ci = 1

const combination = (n, k, result, start, tracker) => {

    if(k == 0){
        console.log("here comes B-->", B, tracker)
        result.push([...tracker])
        return
    }

    for(let i = start; i <= n ; i++){
        tracker.push(i)
        combination(n, parseInt(k-1), result, i + 1, tracker)
        tracker.pop()
    }

}

combination(A, B, result, ci, [])

return result
}




A = 3
B = 2
console.log(recursive(A, B))

