/**
 * @problem https://leetcode.com/problems/most-visited-sector-in-a-circular-track/
 */

/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  const visited = Array(n + 1).fill(0);
  ++visited[rounds[0]];

  for (let i = 1; i < rounds.length; ++i) {
    let start = rounds[i - 1];
    let end = rounds[i];

    if (start < end) {
      for (let i = start + 1; i <= end; ++i) {
        ++visited[i];
      }
    } else if (start > end) {
      for (let i = start + 1; i <= n; ++i) {
        ++visited[i];
      }
      for (let i = 1; i <= end; ++i) {
        ++visited[i];
      }
    }
  }

  let max = Math.max(...visited);
  const answer = [];

  visited.forEach((v, idx) => {
    if (max === v) {
      answer.push(idx);
    }
  });
  return answer;
};
