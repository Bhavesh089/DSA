/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {

    const unqDict = new Set(wordDict)
    function validate(currStr){
        a = unqDict.has(currStr)       
        return a
    }

    let output = []
    function solve(i, currStr, outputStr){

        if(i > s.length - 1){
            let a =  outputStr.replace(/\s/g,"")
            if(outputStr.length > 0 && a == s){
                output.push(outputStr)
            }
            return 
        }

        currStr += s[i]
        let output1Str = outputStr
        let output2Str = outputStr
        if(validate(currStr)){
            output1Str += currStr + " "
            console.log(outputStr, 'output String')
            newString = ""
            solve(i+1, newString, output1Str)
        }
        solve(i+1, currStr, output2Str) 
    }

    solve(0, "", "")

    return output
};

console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]))