// https://leetcode.com/problems/climbing-stairs/description/

// time complexity O(n)
// space complexity O(n)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = Array(n + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = dp[1] + dp[2];

  if (n <= 3) {
    return dp[n];
  }

  for (let i = 4; i <= n; ++i) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};
