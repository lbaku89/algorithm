/**
 * @origin https://leetcode.com/problems/majority-element/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let half = Math.ceil(nums.length / 2);
  let countMap = new Map();
  let answer = undefined;

  for (const n of nums) {
    let cnt = countMap.get(n) || 0;
    countMap.set(n, cnt + 1);

    if (cnt + 1 >= half) {
      answer = n;
      break;
    }
  }
  return answer;
};
