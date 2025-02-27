var maxSumOfThreeSubarrays = function(nums, k) {
    function solve(i, count, result, sumArr) {
        if (count === 3) {
            return [sumArr[0] + sumArr[1] + sumArr[2], [...result]];
        }
        if (i > nums.length - k) return [0, []];

        let currSum = 0;
        for (let j = 0; j < k; j++) {
            currSum += nums[i + j];
        }

        // Take this subarray
        let ans1 = solve(i + k, count + 1, [...result, i], [...sumArr, currSum]);

        // Skip this index and move forward
        let ans2 = solve(i + 1, count, result, sumArr);

        if (ans1[0] > ans2[0]) return ans1;
        if (ans1[0] < ans2[0]) return ans2;
        return ans1[1] < ans2[1] ? ans1 : ans2;
    }

    return solve(0, 0, [], []);
};
