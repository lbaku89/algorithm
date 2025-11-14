/**
 * @problemLink https://leetcode.com/problems/3sum/
 */

/**
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < nums.length - 2; ++i) {
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue;
    }

    let value = nums[i];
    let lIdx = i + 1;
    let rIdx = nums.length - 1;

    while (lIdx < rIdx) {
      const sum = value + nums[lIdx] + nums[rIdx];
      let left = nums[lIdx];
      let right = nums[rIdx];
      if (sum === 0) {
        answer.push([value, left, right]);

        while (lIdx < rIdx && left === nums[lIdx]) ++lIdx;
        while (lIdx < rIdx && right === nums[rIdx]) --rIdx;
      } else if (sum < 0) {
        ++lIdx;
      } else if (sum > 0) {
        --rIdx;
      }
    }
  }
  return answer;
};
