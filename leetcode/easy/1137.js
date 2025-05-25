// https://leetcode.com/problems/n-th-tribonacci-number/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let dp = [0, 1, 1];

    for (let i = 3; i <= n; ++i) {
        let n = dp[i - 3] + dp[i - 2] + dp[i - 1];
        dp.push(n);
    }
    return dp[n];
};
