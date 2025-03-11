// https://leetcode.com/problems/maximum-subarray/description/
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
