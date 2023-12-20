const maxSms = (A) => {

    ans = -Infinity

    const kadanes = (arr) => {

        currSum = arr[0]
        currMax = arr[0]
        for(j = 1; j < arr.length; j++){
            currSum = Math.max(arr[j], currSum + arr[j])
            currMax = Math.max(currMax, currSum)
        }
        return currMax
    }

    for(st = 0; st < A.length; st++)
    {
        let sum = new Array(A[0].length).fill(0)   
        for(let end = st; end < A.length; end++)
        {
        for(let i = 0; i < A[0].length; i++)
            {
                sum[i] = sum[i] + A[end][i]
            }
        }
        console.log(sum, 'this isum--->')
        ans = Math.max(ans, kadanes(sum))
    }

    return ans
}


A = [[-83,-73,-70,-61],[-56,-48,-13,4],[38,48,71,71]]
console.log(A)
console.log(maxSms(A))