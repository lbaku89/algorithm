/**
 * @source https://leetcode.com/problems/find-the-maximum-divisibility-score/
 */

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let maxCnt = 0;
  let answer = undefined;

  for (const divisor of divisors) {
    let cnt = 0;
    nums.forEach((n) => {
      if (n % divisor === 0) {
        ++cnt;
      }
    });

    if (maxCnt < cnt) {
      maxCnt = cnt;

      answer = divisor;
    } else if (maxCnt === cnt) {
      maxCnt = cnt;

      if (answer === undefined) {
        answer = divisor;
      } else if (answer > divisor) {
        answer = divisor;
      }
    }
  }

  return answer;
};
