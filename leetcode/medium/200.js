/**
 * @origin https://leetcode.com/problems/number-of-islands/description/
 */

/**
 * @timeComplexity O(m*n)
 * @spaceComplexity O(m*n)
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const row = grid.length - 1,
    col = grid[0].length - 1;

  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];

  const visit = (r, c) => {
    grid[r][c] = "0";

    for (let i = 0; i <= 3; ++i) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr > row || nc < 0 || nc > col || grid[nr][nc] === "0") {
        continue;
      }

      visit(nr, nc);
    }
  };
  let count = 0;

  for (let r = 0; r < grid.length; ++r) {
    for (let c = 0; c < grid[0].length; ++c) {
      if (grid[r][c] === "1") {
        ++count;
        visit(r, c);
      }
    }
  }
  return count;
};
