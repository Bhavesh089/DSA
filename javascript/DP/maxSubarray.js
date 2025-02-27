var maxSubArray = function(nums) {


    function crossSumSolve(nums, mid, left, right){

        leftMax = -Infinity
        leftSum = 0
    
        for(let i = mid;  i >= left; i--){

            leftSum += nums[i]
            leftMax = Math.max(leftMax, leftSum)
        }

        rightMax = -Infinity
        rightSum = 0

        for(let i = mid+1;  i <= right; i++){

            rightSum += nums[i]
            rightMax = Math.max(rightMax, rightSum)
        }


        return rightMax + leftMax
    }


    function solve(nums, left, right){

        if(left === right){
            return nums[left]
        }
        console.log(typeof left, right, nums )
        let mid = Math.floor((left + right) / 2)

        let leftSum = solve(nums, left, mid)

        let rightSum = solve(nums, mid+1, right)

        let crossSum = crossSumSolve(nums, mid, left, right)

        return Math.max(leftSum, rightSum, crossSum)
    }

    return solve(nums, 0, nums.length - 1)
};

console.log(maxSubArray([-1,23,3,4,1,2,3]))