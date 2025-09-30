function solution(arr, rows, cols) {
  if (arr.length < rows * cols) {
    return [];
  }

  const answer = Array(rows)
    .fill(null)
    .map((_) => {
      return Array(cols).fill(null);
    });

  // center

  let centerR, centerC;

  rows % 2 === 0
    ? (centerR = Math.floor(rows / 2) - 1)
    : (centerR = Math.floor(rows / 2));

  cols % 2 === 0
    ? (centerC = Math.floor(cols / 2))
    : (centerC = Math.floor(cols / 2));

  // 서,남,동,북
  let next = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  let nowR = centerR,
    nowC = centerC;

  answer[nowR][nowR] = arr[0];

  const isInner = (r, c) => {
    if (r < 0 || r >= rows.length || c >= cols.length || c < 0) {
      return false;
    }
    return true;
  };

  let dir = 0;

  for (let i = 1; i < arr.length; ++i) {
    const [nr, nc] = [nowR + next[dir][0], nowC + next[dir][1]];

    if (!isInner(nr, nc)) {
      break;
    }
    (nowR = nr), (nowC = nc);
    answer[nr][nc] = arr[i];

    if (dir === 0) {
      if (isInner(nowR + 1, nowC) && answer[nowR + 1][nowC] !== null) {
      } else {
        dir = (dir + 1) % 4;
      }
    } else if (dir === 1) {
      if (isInner(nowR, nowC + 1) && answer[nowR][nowC + 1] !== null) {
      } else {
        dir = (dir + 1) % 4;
      }
    } else if (dir === 2) {
      if (isInner(nowR - 1, nowC) && answer[nowR - 1][nowC] !== null) {
      } else {
        dir = (dir + 1) % 4;
      }
    } else if (dir === 3) {
      if (isInner(nowR, nowC - 1) && answer[nowR][nowC - 1] !== null) {
      } else {
        dir = (dir + 1) % 4;
      }
    }
  }

  return answer;
}

console.log(solution([5, 4, 7, 8, 9, 6, 3, 2, 1], 3, 3));
