//https://leetcode.com/problems/house-robber/description/

// time complexity O(n)
// space complexity O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = Array(nums.length).fill(0);

  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  if (nums.length >= 3) {
    dp[dp.length - 1] = nums.at(-1);
    dp[dp.length - 2] = Math.max(nums.at(-1), nums.at(-2));

    for (let i = nums.length - 3; i >= 0; --i) {
      dp[i] = Math.max(dp[i + 1], dp[i + 2] + nums[i]);
    }

    return dp[0];
  }
};
