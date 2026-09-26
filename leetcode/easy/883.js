/**
 * @problem https://leetcode.com/problems/projection-area-of-3d-shapes/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let answer = 0;
  const n = grid.length;

  for (let i = 0; i <= n - 1; ++i) {
    let max = 0;
    let max2 = 0;

    for (let j = 0; j <= n - 1; ++j) {
      if (grid[i][j] && grid[i][j] > 0) {
        ++answer; // xy
      }

      max = Math.max(grid[j][i], max); // yz
      max2 = Math.max(grid[i][j], max2); // zx
    }
    answer += max;
    answer += max2;
  }
  return answer;
};
