/**
 * @source https://leetcode.com/problems/island-perimeter/
 */

// time complexity O(m*n)
// space complexity O(m*n)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;

  const visitedMap = Array(grid.length)
    .fill(null)
    .map((_) => {
      return Array(grid[0].length).fill(false);
    });

  const dfs = (r, c) => {
    visitedMap[r][c] = true;
    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];

    let currentPerimeter = 0;
    for (let i = 0; i < 4; ++i) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (
        nr < 0 ||
        nr > grid.length - 1 ||
        nc < 0 ||
        nc > grid[0].length - 1 ||
        !grid[nr][nc]
      ) {
        ++currentPerimeter;
        continue;
      }

      if (!visitedMap[nr][nc]) {
        dfs(nr, nc);
      }
    }
    perimeter += currentPerimeter;
  };

  for (let r = 0; r < grid.length; ++r) {
    for (let c = 0; c < grid[0].length; ++c) {
      if (grid[r][c] === 1) {
        dfs(r, c);
        return perimeter;
      }
    }
  }
};
