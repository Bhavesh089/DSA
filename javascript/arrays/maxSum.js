const max_sum = (A) => {
    ans = A[0]
    curr_sum = A[0]

    for(let x = 1; x < A.length; x++){

        curr_sum = Math.max(x, Number(Number(curr_sum) + parseInt(A[x])))

        ans = Math.max(curr_sum, ans)
    }

    return ans 
}

console.log(max_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4] ))