const maxSubarray = (A, B) => {


    //rowise
    n = A.length 
    arr = []
    for(k = 0; k < n - B + 1; k++){
        arr.push(new Array(n).fill(0))
    }

    console.log(arr)

    for(col = 0; col < n; col++ ){
        s = 0
        e = 0
        i = 0
        sum = 0
        while(e < n){

            sum += A[e][col]

            if(e - s + 1 == B){

                arr[i][col] = sum
                i++
                sum -= A[s][col]
                s++ 
            }

        e++
        }
    }

    console.log(arr, "this is arr--->")

    //colwise

    ans = -Infinity

    for(row = 0; row < arr.length; row++){
        s = 0
        e = 0
        sum2 = 0
        while(e < n){

            sum2 += arr[row][e]

            if(e - s + 1 == B){
                console.log(sum2, " this is is summ-->")
                ans = Math.max(ans, sum2)
                sum2 -= arr[row][s]
                s++

        }
        e++
    }
    console.log(row, sum2, ans, '-->')

}
    return ans
}


console.log(maxSubarray([
    [2, 2],
    [2, 2],
], 2))

