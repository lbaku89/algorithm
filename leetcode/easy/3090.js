/**
 * @source https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/
 * time complexity O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  const map = new Map();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; ++right) {
    const cha = s[right];
    map.set(cha, (map.get(cha) || 0) + 1);

    if (map.get(cha) >= 3) {
      while (map.get(cha) >= 3) {
        let leftCha = s[left];
        map.set(leftCha, map.get(leftCha) - 1);
        ++left;
      }
    }

    maxLength = Math.max(right - left + 1, maxLength);
  }
  return maxLength;
};
