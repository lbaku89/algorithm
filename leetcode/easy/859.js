// https://leetcode.com/problems/buddy-strings/description/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    if (s === goal) {
        return new Set([...s]).size === s.length ? false : true;
    }

    let diffIdxArr = [];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== goal[i]) {
            diffIdxArr.push(i);
        }
    }

    if (diffIdxArr.length === 2) {
        const [i, j] = diffIdxArr;
        return s[i] === goal[j] && s[j] === goal[i];
    }

    return false;
};
