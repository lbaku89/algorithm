/**
 * @source https://leetcode.com/problems/max-area-of-island/description/
 */

/**
 * @timeComplexity O(m*n)
 * @spaceComplexity O(m*n)
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;

  let answer = 0;
  let area = 0;

  const dr = [0, 0, 1, -1],
    dc = [1, -1, 0, 0];

  const visit = (r, c) => {
    ++area;
    grid[r][c] = 0;
    for (let i = 0; i < 4; ++i) {
      const row = r + dr[i];
      const col = c + dc[i];

      if (
        row < 0 ||
        row > rows - 1 ||
        col < 0 ||
        col > cols - 1 ||
        grid[row][col] === 0
      ) {
        continue;
      }
      visit(row, col);
    }
  };

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      if (grid[r][c] === 1) {
        area = 0;
        visit(r, c);
        answer = Math.max(answer, area);
      }
    }
  }

  return answer;
};
