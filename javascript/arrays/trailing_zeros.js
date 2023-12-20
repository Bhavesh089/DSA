const trailing_zeros = (A) => {

    ans =0
    current_ans_factorial = A
    multi = 5

    while(current_ans_factorial > 1){

        current_ans_factorial = parseInt(A / multi)

        ans += current_ans_factorial

        multi = multi * 5
    }

    return ans
}