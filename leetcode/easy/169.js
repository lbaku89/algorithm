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

/**
 * @note best solution - space complexity O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = 0;
  let cnt = 0;

  for (const n of nums) {
    if (cnt === 0) {
      candidate = n;
    }

    cnt += candidate === n ? 1 : -1;
  }

  return candidate;
};
