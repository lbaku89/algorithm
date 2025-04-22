// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// time complexity O(n)
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    const map = new Map();

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    if (map.get("L") !== map.get("R")) {
        return 0;
    }

    let cnt = 0;
    for (const char of s) {
        map.set(char, map.get(char) - 1);
        if (map.get("L") === map.get("R")) {
            ++cnt;
        }
    }

    return cnt;
};

console.log(balancedStringSplit("RLRRLLRLRL")); // 4
