var minStickers = function(stickers, target) {

    function compareString(index, currString){
        let sticker = stickers[index]

        for(let i = 0; i < sticker.length; i++){
            let j = 0
            while(j < currString.length){
                if(sticker[i] == currString[j]){
                    currString = currString.slice(0, j) + currString.slice(j+1)
                    break
                }
                j++
            }
        }

        return currString
    }
    function solveRecursion(i, currString){

        if(currString.length == 0){
            return 0
        }
        if(i >= stickers.length){
            return Infinity
        }
        temp = currString
        currString = compareString(i, currString)
        let a = Infinity
        let b = Infinity
        if(temp.length > currString.length){
            a = 1 + solveRecursion(i, currString)
        } else {
            b = solveRecursion(i+1, currString)
        }
        return Math.min(a, b)
    }


    return solveRecursion(0, target) == Infinity ? -1 : solveRecursion(0, target)
};

// console.log(minStickers(["these","guess","about","garden","him"], "atomher"))
// console.log(minStickers(["notice","possible"], "basicbasic"))
console.log(minStickers(["with","example","science"], "thehat"))