/**
 * @source https://leetcode.com/problems/minimum-size-subarray-sum/
 */

/**
 * @timeComplexity O(n)
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let [left, right] = [0, 0];
  let min = Infinity;
  let sum = 0;

  while (right < nums.length) {
    const rNumber = nums[right];
    sum += rNumber;

    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      ++left;
    }

    ++right;
  }

  if (min === Infinity) {
    return 0;
  }

  return min;
};
