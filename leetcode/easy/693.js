// https://leetcode.com/problems/binary-number-with-alternating-bits/

// time complexity O(log n)
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let str = n.toString(2);
    for (let i = 1; i < str.length; ++i) {
        if (str[i - 1] == str[i]) {
            return false;
        }
    }

    return true;
};

// time complexity O(log n)
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let remain = undefined;

    while (Math.floor(n / 2) !== 0) {
        if (n % 2 === remain) {
            return false;
        }
        remain = n % 2;
        n = Math.floor(n / 2);
    }

    if (n === remain) {
        return false;
    }

    return true;
};
