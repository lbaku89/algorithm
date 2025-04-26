// https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let [first, second] = [Infinity, Infinity];

    for (const n of nums) {
        if (n <= first) {
            first = n;
        } else if (n <= second) {
            second = n;
        } else {
            return true;
        }
    }

    return false;
};
