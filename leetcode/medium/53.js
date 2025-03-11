// https://leetcode.com/problems/maximum-subarray/description/

// run-time 1ms
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; ++i) {
        let num = nums[i];
        if (sum <= 0) {
            sum = 0;
        }
        sum = sum + num;
        max = Math.max(sum, max);
    }

    return max;
};

// rut-time 6ms
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    let sum = 0;

    nums.forEach((num) => {
        let newSum = sum + num;
        max = Math.max(newSum, max);
        if (newSum <= 0) {
            sum = 0;
        } else {
            sum = newSum;
        }
    });
    return max;
};
