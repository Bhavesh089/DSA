function countOneDigits(number, curr_dig, next_dig, ans, memo, target){

    if(number == target){
        return ans
    }
    curr_dig = curr_dig + 1

    curr_dig = curr_dig % 10

    if (curr_dig == 0){

        next_dig = parseInt(next_dig) + 1
        next_dig = next_dig.toString()
    }

    // console.log(curr_dig, "this curren digit")

    curr_dig = curr_dig.toString()

    curr_ones = 0

    if(next_dig.includes(1)){

        if (next_dig in memo){
            curr_ones = memo[next_dig]
        } else{
            curr_ones += 1
        }        
    }
    // console.log(curr_dig, "this iss current digigt")
    if(curr_dig.includes("1")){

        curr_ones += 1
    }
    
    ans += curr_ones
    console.log('ans:', ans, 'ones:', curr_ones)
    console.log(parseInt(next_dig), parseInt(curr_dig), 'hello')
    curr_num = parseInt(next_dig + curr_dig)
    memo[curr_num] = curr_ones
    console.log(memo, "this is memo")


    return countOneDigits(curr_num, parseInt(curr_dig), next_dig, ans, memo, target )
}

console.log(countOneDigits(number = 0, curr_dig= 0, next_dig = "0", ans = 0, memo = {}, target = 0))