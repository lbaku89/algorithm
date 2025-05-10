// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let left = 0;
    let max = 0;
    let zeroCnt = 0;
    for (let right = 0; right < nums.length; ++right) {
        if (!nums[right]) {
            if (zeroCnt >= 1) {
                while (nums[left]) {
                    ++left;
                }
                ++left;
                zeroCnt = 1;
            } else {
                ++zeroCnt;
            }
        }

        max = Math.max(right - left, max);
    }

    return max;
};
