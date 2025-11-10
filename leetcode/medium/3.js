/**
 * @problem https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

/**
 * @timeComplexity O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arr = [];
  const seen = new Map();

  let [left, right] = [0, 0];

  let max = 0;

  while (right < s.length) {
    const cha = s[right];

    if (seen.get(cha)) {
      while (s[left] !== cha) {
        seen.set(s[left], false);
        ++left;
      }

      seen.set(cha, false);
      ++left;
    }

    seen.set(cha, true);
    ++right;
    max = Math.max(max, right - left);
  }

  return max;
};

/**
 * @연산 최적화
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }

  let map = {};

  let right = 0;
  let answer = 1;
  for (let left = 0; left < s.length; ) {
    if (map[s[left - 1]]) {
      --map[s[left - 1]];
    }

    right = left >= right ? left : right;

    while (right < s.length) {
      if (map[s[right]]) {
        break;
      }

      map[s[right]] = 1;
      answer = Math.max(right - left + 1, answer);
      ++right;
    }
    ++left;
  }

  return answer;
};

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
