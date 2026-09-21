/**
 * @source https://leetcode.com/problems/semi-ordered-permutation/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  const idx1 = nums.indexOf(1);
  const idx2 = nums.indexOf(nums.length);
  const answer = idx1 + nums.length - idx2 - 1;

  return idx1 > idx2 ? answer - 1 : answer;
};
