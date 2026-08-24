/**
 * @source https://leetcode.com/problems/domino-and-tromino-tiling/
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const MOD = 10 ** 9 + 7;
  const dp = Array(n + 1).fill(0);
  const gap = Array(n + 1).fill(0);
  ((gap[0] = 0), (gap[1] = 0), (gap[2] = 2), (gap[3] = 4));
  ((dp[0] = 0), (dp[1] = 1), (dp[2] = 2), (dp[3] = 5));
  for (let i = 4; i <= n; ++i) {
    gap[i] = (gap[i - 1] + dp[i - 2] * 2) % MOD;
    dp[i] = (dp[i - 1] + dp[i - 2] + gap[i - 1]) % MOD;
  }
  return dp[n];
};
