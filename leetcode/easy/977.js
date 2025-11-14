/**
 * @problemLink https://leetcode.com/problems/squares-of-a-sorted-array/description/
 */

/**
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const answer = Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let idx = nums.length - 1;
  while (left <= right) {
    const leftValue = nums[left] * nums[left];
    const rightValue = nums[right] * nums[right];

    if (leftValue >= rightValue) {
      answer[idx] = leftValue;
      ++left;
    } else {
      answer[idx] = rightValue;
      --right;
    }

    --idx;
  }

  return answer;
};
