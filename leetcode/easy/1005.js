/**
 * @problem https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i];

    if (n < 0) {
      if (k > 0) {
        nums[i] = -nums[i];
        --k;
      }
    }
  }

  if (k === 0) {
    return nums.reduce((acc, cur) => (acc += cur), 0);
  }

  let min = Infinity;
  let sum = 0;
  for (const n of nums) {
    min = Math.min(n, min);
    sum += n;
  }

  return k % 2 === 0 ? sum : sum - 2 * min;
};
