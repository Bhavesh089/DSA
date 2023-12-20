const towerHonai = (A) => {

    n = A
    s = 1
    d = 3
    h = 2

    result = []
    const recursive = (n, s, d, h, result) => {
        if(n == 1){
            result.push([n, s, d])
            return
        }
        recursive(n-1, s, h, d, result)
        result.push([n, s, d])
        recursive(n-1,h, d, s, result)

    }

    recursive(n, s, d, h, result)

    return result
}

console.log(towerHonai(2))