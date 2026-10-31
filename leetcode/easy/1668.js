/**
 * @source https://leetcode.com/problems/maximum-repeating-substring/description/
 */

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let max = 0;

  for (let i = 0; i <= sequence.length - word.length; ++i) {
    let start = i;
    let end = i + word.length - 1;
    let cnt = 0;
    while (start <= sequence.length - word.length) {
      const sliced = sequence.slice(start, end + 1);
      if (sliced === word) {
        ++cnt;
      } else {
        break;
      }

      start += word.length;
      end += word.length;
    }

    max = Math.max(cnt, max);
  }

  return max;
};
