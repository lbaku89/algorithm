/**
 * @source https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/description/
 */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length;

  let rows = Array(n)
    .fill(0)
    .map((_) => Array(n).fill(0));
  let cols = Array(n)
    .fill(0)
    .map((_) => Array(n).fill(0));

  for (let r = 0; r < n; ++r) {
    for (let c = 0; c < n; ++c) {
      let num = matrix[r][c] - 1;

      if (rows[r][num] >= 1 || cols[c][num] >= 1) {
        return false;
      }

      ++rows[r][num];
      ++cols[c][num];
    }
  }

  return true;
};
