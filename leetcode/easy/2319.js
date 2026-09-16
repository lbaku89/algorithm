/**
 * @problem https://leetcode.com/problems/check-if-matrix-is-x-matrix/
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const length = grid.length;
  for (let r = 0; r < length; ++r) {
    for (let c = 0; c < length; ++c) {
      if (r === c) {
        if (grid[r][c] === 0) {
          return false;
        }
        continue;
      } else if (length - 1 - r === c) {
        if (grid[r][c] === 0) {
          return false;
        }
        continue;
      } else if (grid[r][c] !== 0) {
        return false;
      }
    }
  }
  return true;
};
