/**
 * @source https://school.programmers.co.kr/learn/courses/30/lessons/1844
 */
function solution(maps) {
  let [n, m] = [maps.length, maps[0].length];
  let visited = Array(n)
    .fill(null)
    .map((_) => {
      return Array(m).fill(false);
    });

  let answer = -1;
  let idx = 0;
  let queue = [[0, 0, 1]];

  // 동서남북
  let dr = [0, 0, 1, -1];
  let dc = [1, -1, 0, 0];
  visited[0][0] = true;

  while (idx < queue.length) {
    let [r, c, cnt] = queue[idx++];

    if (r === n - 1 && c === m - 1) {
      answer = cnt;
      break;
    }

    for (let i = 0; i <= 3; ++i) {
      let nr = r + dr[i];
      let nc = c + dc[i];

      if (nr < 0 || nr >= n || nc < 0 || nc >= m) {
        continue;
      }

      if (maps[nr][nc] === 0) {
        continue;
      }

      if (visited[nr][nc]) {
        continue;
      }

      visited[nr][nc] = true;
      queue.push([nr, nc, cnt + 1]);
    }
  }

  return answer;
}
