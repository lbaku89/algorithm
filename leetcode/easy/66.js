// https://leetcode.com/problems/plus-one/

/**
 * time complexity : O(n)
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    ++digits[digits.length - 1];

    for (let i = digits.length - 1; i >= 0; --i) {
        let n = digits[i];
        if (n === 10) {
            digits[i] = 0;
            if (i !== 0) {
                ++digits[i - 1];
            }
        }
    }
    if (digits[0] === 0) {
        digits.unshift(1);
    }

    return digits;
};
