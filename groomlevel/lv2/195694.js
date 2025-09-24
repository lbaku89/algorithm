/**
 * @source https://level.goorm.io/exam/195694/%EB%B0%9C%EC%A0%84%EA%B8%B0/quiz/1
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  if (line.trim().length === 0) return;
  input.push(line.trim());
});

rl.on("close", () => {
  // 첫 줄: n, 다음 n줄: 격자
  const n = Number(input[0]);
  const map = input.slice(1, 1 + n).map((row) =>
    row
      .split(/\s*/)
      .filter((x) => x !== "")
      .map(Number)
  );
  // 위에서 공백 없는 "01101" 같은 입력도, "0 1 1 0 1" 같은 입력도 둘 다 처리

  let answer = 0;

  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (map[r][c] === 1) {
        answer++;
        // 방문 표시
        map[r][c] = 0;
        const stack = [[r, c]];
        while (stack.length) {
          const [nowR, nowC] = stack.pop();
          for (let i = 0; i < 4; i++) {
            const nr = nowR + dr[i];
            const nc = nowC + dc[i];
            if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
            if (map[nr][nc] !== 1) continue; // 다음 칸 검사
            map[nr][nc] = 0; // 방문 처리
            stack.push([nr, nc]);
          }
        }
      }
    }
  }

  console.log(answer);
});
