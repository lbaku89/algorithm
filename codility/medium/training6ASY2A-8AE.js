/**
 * @source https://app.codility.com/c/run/training6ASY2A-8AE/
 * @taskScore 66% - correctness(100%),Performance(40%)
 */

function solution(N, A) {
  let answer = Array(N + 1).fill(0);
  let maxNum = 0;
  A.forEach((x, k) => {
    if (x >= 1 && x <= N) {
      ++answer[x];
      maxNum = Math.max(maxNum, answer[x]);
    } else if (x === N + 1) {
      answer = Array(N + 1).fill(maxNum);
    }
  });

  return answer.slice(1, answer.length);
}

/**
 * @optimization
 */

function solution(N, A) {
  let answer = Array(N + 1).fill(0);
  let base = 0;
  let maxNum = 0;
  A.forEach((x, k) => {
    if (x >= 1 && x <= N) {
      if (answer[x] < base) {
        answer[x] = base + 1;
      } else {
        ++answer[x];
      }

      maxNum = Math.max(maxNum, answer[x]);
    } else if (x === N + 1) {
      base = maxNum;
    }
  });

  answer.forEach((n, idx) => {
    if (n < base) {
      answer[idx] = base;
    }
  });

  return answer.slice(1, answer.length);
}
