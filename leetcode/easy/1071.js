// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    function fn(a, b) {
        let remain = a % b;
        if (remain === 0) {
            return b;
        }
        return fn(b, remain);
    }

    let l = fn(str1.length, str2.length);
    return str1.substring(0, l);
};

// test case
console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
