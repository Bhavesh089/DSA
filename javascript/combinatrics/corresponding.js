const corespodingEle = (A) => {

    rem = 0
    ans = ""
    while(A > 0 ){

        rem = A % 26

        alpha = parseInt((65 + rem) - 1)

        ans = String.fromCharCode(alpha) + ans

        A = Math.floor(A / 26)
    }

    return ans.toString() 
}

console.log(corespodingEle(11))