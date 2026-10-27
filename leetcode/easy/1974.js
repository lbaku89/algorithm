/**
 * @source https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
 */

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let answer = 0;

  for (let i = 0; i < word.length; ++i) {
    ++answer;
    let prev = word[i - 1];
    let current = word[i];
    if (i === 0) {
      prev = "a";
    }
    const diff = Math.abs(prev.charCodeAt(0) - current.charCodeAt(0));

    answer += Math.min(26 - diff, diff);
  }

  return answer;
};
