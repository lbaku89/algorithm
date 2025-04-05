// https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
    let cnt = 0;

    for (let i = 0; i < s.length; ++i) {
        let [one, zero] = s[i] == 1 ? [1, 0] : [0, 1];

        if (one <= k || zero <= k) {
            ++cnt;
        }

        for (let j = i + 1; j < s.length; ++j) {
            s[j] === "1" ? ++one : ++zero;
            if (one <= k || zero <= k) {
                ++cnt;
            } else {
                break;
            }
        }
    }
    return cnt;
};
