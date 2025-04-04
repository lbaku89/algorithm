// https://leetcode.com/problems/replace-all-digits-with-characters/

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let sArr = s.split("");
    for (let i = 1; i < s.length; i = i + 2) {
        let newCharCode = s[i - 1].charCodeAt(0) + Number(s[i]); // base 숫자
        sArr[i] = String.fromCharCode(newCharCode);
    }
    return sArr.join("");
};
