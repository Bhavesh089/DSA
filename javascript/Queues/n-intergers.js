const nIntergers = (A) => {

    if(A == 1){
        return [1]
    }
    if(A == 2){
        return [1,2]
    }
    if(A == 3){
        return [1,2,3]
    }

    let result = [1,2,3]
    let mul = 10
    let i = 0
    let index = 0
    let l = 0
    top = result[index]
    while(result.length < A){
        if(i % 3 == 0){
            top = result[index]
            l = 1
            index++
        }
        result.push((top * mul) + l)
        i++
        l++
    }   

    return result

}

console.log(nIntergers(58))