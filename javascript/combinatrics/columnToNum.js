const colNum = (A) =>{

    power = 1
    ans = 0
    for(x = A.length - 1; x >= 0; x-- ){
        console.log(A[x])
        num = A[x].charCodeAt(0)
        multi = (num - 65) + 1
        ans = ans + (multi * power)

        power = power * 26
    }

    return ans 
} 

console.log(colNum("A"))