// https://leetcode.com/problems/counting-bits/description/?envType=study-plan-v2&envId=leetcode-75

// best solution
// time complexity: O(n)
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let dp = new Array(n + 1).fill(0);
    let offset = 1;
    for (let i = 1; i <= n; ++i) {
        if (i === offset * 2) {
            offset = i;
        }

        dp[i] = 1 + dp[i - offset];
    }

    return dp;
};
// test case
console.log(countBits(5));

// time complexity: O(n * log n)
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let arr = [];
    for (let i = 0; i <= n; ++i) {
        let str = i.toString(2);
        let cnt = [...str].reduce((acc, cur) => {
            if (cur === "1") {
                return acc + 1;
            }
            return acc;
        }, 0);

        arr.push(cnt);
    }

    return arr;
};
