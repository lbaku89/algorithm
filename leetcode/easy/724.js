// https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = nums.reduce((acc, cur) => {
        return acc + cur;
    }, 0);

    let [left, right] = [0, sum - nums[0]];

    if (left === right) {
        return 0;
    }
    for (let i = 1; i < nums.length; ++i) {
        left += nums[i - 1];
        right -= nums[i];

        if (left === right) {
            return i;
        }
    }

    return -1;
};
