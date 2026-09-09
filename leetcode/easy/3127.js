/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
  for (let r = 0; r <= 1; ++r) {
    for (let c = 0; c <= 1; ++c) {
      const color = grid[r][c];
      let diffCount = 0;

      const dr = [0, 1, 1]; // 우, 상, 대각
      const dc = [1, 0, 1];

      for (let i = 0; i <= 2; ++i) {
        if (grid[r + dr[i]][c + dc[i]] != color) {
          ++diffCount;
        }
      }

      if (diffCount <= 1 || diffCount === 3) {
        return true;
      }
    }
  }

  return false;
};
