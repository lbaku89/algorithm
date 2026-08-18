// https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/

/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function (s) {
  let answer = 0;
  let zeroCnt = 0;

  for (const ch of s) {
    if (ch === "0") {
      ++zeroCnt;
    }

    if (zeroCnt >= 1) {
      if (ch === "1") {
        answer = Math.max(answer + 1, zeroCnt);
      }
    }
  }
  return answer;
};
