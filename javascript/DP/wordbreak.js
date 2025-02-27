
var wordBreak = function(s, wordDict) {

    function validate(i, j, inputString){

        let currString = inputString.slice(i, j+1)
        // console.log(currString)
        for(let string of wordDict){

            if(string == currString){
                console.log(currString)
                i = j + 1
                break
            }
        }

        return [i, j]
    }
    
    function solve(i, j, inputString){

        if(j > inputString.length-1){
            // console.log(i, j)
            if(i == j ){
                return true
            } else {
                return false
            }
        }

        let indexs = validate(i, j, inputString)

        let ans2 = solve(indexs[0], indexs[1] + 1, inputString)
        let ans1 = solve(indexs[0], indexs[1] + 2, inputString)

        return ans1 || ans2

    }

    return solve(0, 0, s)
};

console.log(wordBreak("aaa aaa a", ["aaaa","aaa"]))