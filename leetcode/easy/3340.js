/**
 * @source https://leetcode.com/problems/check-balanced-string/
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let sum = 0;
  num.split("").forEach((n, idx) => {
    if (idx % 2 === 0) {
      sum += Number(n);
    } else {
      sum -= Number(n);
    }
  });

  return sum === 0 ? true : false;
};
