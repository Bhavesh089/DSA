/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let result = []
    result.push([1])
    if(numRows == 1){    
       return result
    }
    result.push([1,1])
    if(numRows == 2){
        return result 
    }

    let i = 3

    while(i <= numRows){
        let newRow = [1]
        let lastRow = result[result.length - 1]
        for(let k = 0; k < lastRow.length - 1; k++){
            let sum = lastRow[k] + lastRow[k+1]
            newRow.push(sum)
        }
        newRow.push(1)
        result.push(newRow)
        i++
    }

    return result
};

console.group(generate(5))