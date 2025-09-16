/**
 * @source https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) {
    return 0;
  }

  let answer = 0;

  const minDp = Array(prices.length).fill(-1);
  minDp[0] = prices[0];
  const maxDp = Array(prices.length).fill(-1);
  maxDp[prices.length - 1] = prices.at(-1);

  for (let i = 1; i < prices.length; ++i) {
    minDp[i] = Math.min(prices[i], minDp[i - 1]);
  }
  for (let i = prices.length - 2; i >= 0; --i) {
    maxDp[i] = Math.max(prices[i], maxDp[i + 1]);
  }

  for (let i = 0; i < prices.length; ++i) {
    if (maxDp[i + 1] - minDp[i] > 0) {
      answer = Math.max(answer, maxDp[i + 1] - minDp[i]);
    }
  }

  return answer;
};
