// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let increasingStack = 1;
  let answer = 1;

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] < nums[i]) {
      ++increasingStack;
      answer = Math.max(answer, increasingStack);
    } else {
      increasingStack = 1;
    }
  }

  return answer;
};
