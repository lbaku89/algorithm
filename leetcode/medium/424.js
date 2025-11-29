/**
 * @problem https://leetcode.com/problems/longest-repeating-character-replacement/description/
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const count = {};

  let left = 0;
  let answer = 0;

  for (let right = 0; right < s.length; ++right) {
    const ch = s[right];
    count[ch] = (count[ch] || 0) + 1;

    let maxCnt = 0;

    Object.values(count).forEach((cnt) => {
      maxCnt = Math.max(cnt, maxCnt);
    });

    while (right - left + 1 - maxCnt > k) {
      count[s[left]] -= 1;
      ++left;

      let maxCnt = 0;
      Object.values(count).forEach((cnt) => {
        maxCnt = Math.max(cnt, maxCnt);
      });
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};
