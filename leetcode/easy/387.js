// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * time complexity O(n)
 * space complexity O(1)
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const aCode = "a".charCodeAt(0);
  const l = "z".charCodeAt(0) - aCode + 1;

  const cntArr = Array(l).fill(0);

  for (const ch of s) {
    ++cntArr[ch.charCodeAt(0) - aCode];
  }

  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (cntArr[ch.charCodeAt(0) - aCode] === 1) {
      return i;
    }
  }

  return -1;
};
