const bitwiseThree = (A) => {

    number = 0
    for(let i of A){
        number ^= i
    }

    position = -1

    for(let j=0; j <= 31; j++){

        if(number >> j & 1 == 1){

            position = j

            break
        }
    }


    ones = 0
    zeros = 0
    for(let num of A){

        if(num >> position & 1 == 1){

            ones ^= num
        } else{
            zeros ^= num
        }
    }

    if(ones > zeros){
        return [zeros, ones]
    } 
    return [ones, zeros]
}

console.log(bitwiseThree([1, 2, 3, 1, 2, 4]))