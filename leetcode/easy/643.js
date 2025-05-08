// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75
// time complexity O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0;
    for (let i = 0; i < k; ++i) {
        sum += nums[i];
    }
    let max = sum;
    for (let i = 1; i <= nums.length - k; ++i) {
        sum = sum + nums[i + k - 1] - nums[i - 1];
        max = Math.max(sum, max);
    }

    return max / k;
};
