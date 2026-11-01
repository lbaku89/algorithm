/**
 * @source https://leetcode.com/problems/check-if-array-is-good/description/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  const n = Math.max(...nums);
  const array = Array(n + 1).fill(0);

  if (nums.length !== n + 1) {
    return false;
  }

  for (const num of nums) {
    if (num < 0 || num > n) {
      return false;
    }

    const limit = num === n ? 2 : 1;

    ++array[num];

    if (array[num] > limit) {
      return false;
    }
  }

  return true;
};
