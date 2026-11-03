/**
 * @source https://leetcode.com/problems/number-of-arithmetic-triplets/
 */

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const set = new Set();
  for (const n of nums) {
    set.add(n);
  }
  let answer = 0;
  for (const n of nums) {
    if (set.has(n + diff) && set.has(n + diff * 2)) {
      ++answer;
    }
  }

  return answer;
};
