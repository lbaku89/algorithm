// https://leetcode.com/problems/guess-number-higher-or-lower/?envType=study-plan-v2&envId=leetcode-75
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1;
    let right = n;
    let mid = undefined;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        let result = guess(mid);

        if (result === 0) {
            return mid;
        } else if (result === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};
