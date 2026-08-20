// https://leetcode.com/problems/letter-tile-possibilities/

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const count = Array(26).fill(0);
  for (const cha of tiles) {
    count[cha.charCodeAt(0) - 65]++;
  }

  let answer = 0;

  const dfs = () => {
    for (let i = 0; i < count.length; ++i) {
      if (count[i] === 0) {
        continue;
      }

      ++answer;
      --count[i];

      dfs();
      ++count[i];
    }

    return answer;
  };

  return dfs();
};
