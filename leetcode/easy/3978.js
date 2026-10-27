/**
 * @source https://leetcode.com/problems/unique-middle-element/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function (nums) {
  const set = new Set();
  const middleIdx = Math.floor(nums.length / 2);
  const middle = nums[middleIdx];

  for (let i = 0; i < nums.length; ++i) {
    if (i === middleIdx) {
      continue;
    }

    if (middle === nums[i]) {
      return false;
    }
  }
  return true;
};
