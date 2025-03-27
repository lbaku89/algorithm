// https://leetcode.com/problems/is-subsequence/

// 시간 복잡도 O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sIdx = 0,
        tIdx = 0;

    while (sIdx < s.length && tIdx < t.length) {
        if (s[sIdx] === t[tIdx]) {
            ++sIdx;
            ++tIdx;
        } else {
            ++tIdx;
        }
    }
    return sIdx === s.length ? true : false;
};
