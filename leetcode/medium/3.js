/**
 * @problem https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }

  let map = {};

  let str = "";
  let right = 0;
  let answer = 1;
  for (let left = 0; left < s.length; ) {
    if (map[str[0]]) {
      --map[str[0]];
    }
    str = str.slice(1);

    right = left >= right ? left : right;

    while (right < s.length) {
      if (map[s[right]]) {
        break;
      }
      str = str + s[right];
      map[s[right]] = 1;
      answer = Math.max(str.length, answer);
      ++right;
    }
    ++left;
  }

  return answer;
};
