// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s
        .trim()
        .split(" ")
        .filter((v) => v !== "")
        .reverse()
        .join(" ");
};
// test cases
console.log(reverseWords("  hello   world  ")); // "world hello"
