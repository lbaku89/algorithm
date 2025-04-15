// https://leetcode.com/problems/valid-perfect-square/

// time complexity O(logN)

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 1;
    let mid = undefined;
    let right = num;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        let result = mid * mid;
        if (result === num) {
            return true;
        } else if (result < num) {
            left = mid + 1;
        } else if (result > num) {
            right = mid - 1;
        }
    }

    return false;
};
