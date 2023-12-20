const changeCharacter = (A, B) =>{

    const counterEle = {}

    for(i = 0; i< A.length; i++){

        if(A[i] in counterEle){

            counterEle[A[i]]++
        }else{

            counterEle[A[i]] = 1
        }
    }

    console.log(counterEle, "thi si counter--->")
    values = Object.values(counterEle)

    sortedValues = values.sort((a,b) => a-b)

    count = 0
    console.log(sortedValues, "this is sorted values-->")
    while(B > 0){
        
        value = sortedValues[count]
        console.log(value, B)
        
        sum = Number(value - B)

        // console.log(sum)

        if(sum <= 0){
            sortedValues[count] = 0
            count++
            B = Math.abs(sum)
        } else{
            B = 0
        }
    }

console.log(sortedValues)
    unqDistinct = 0
    for(let x of sortedValues){

        if(x != 0){

            unqDistinct++
        }
    }

    return unqDistinct

}


console.log(changeCharacter("a", 1))
