const countDoors = (A) => {

    const doors = new Array(A+1).fill("o")

    for(i =2; i<= A; i++){
        doors[i] = doors[i] == "o" ? "c" : "o"
        for(j = i + i; j <= A; j = j + i){
            doors[j] = doors[j] == "o" ? "c" : "o"
        }
    }

count = 0

// console.log(doors)
    for(i = 1; i <= A; i++){

        if(doors[i] == "o"){

            count++
        }
    }
console.log('final', doors)
return count
}

console.log(countDoors(12))