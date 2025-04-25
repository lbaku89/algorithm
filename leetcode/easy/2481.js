// https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/description/

// time complexity O(1)
/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
    if (n === 1) return 0;
    return n % 2 === 0 ? parseInt(n / 2) : n;
};
