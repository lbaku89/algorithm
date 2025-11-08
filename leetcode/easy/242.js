/**
 * @problem https://leetcode.com/problems/valid-anagram/
 */

/**
 * O(n)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of t) {
    map.set(char, (map.get(char) || 0) - 1);
    if (map.get(char) < 0) {
      return false;
    }
  }

  return true;
};
