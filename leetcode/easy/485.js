/**
 * @source https://leetcode.com/problems/max-consecutive-ones/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let consecutive = 0,
    answer = 0;

  nums.forEach((n) => {
    if (n === 1) {
      ++consecutive;
      answer = Math.max(consecutive, answer);
    } else {
      consecutive = 0;
    }
  });
  return answer;
};
