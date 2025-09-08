/**
 * @problem https://app.codility.com/c/run/trainingJHVB4C-RMG/
 * @timeComplexity O(n)
 */

function solution(N) {
  let binaryNum = N.toString(2);

  for (let i = binaryNum.length - 1; i >= 0; --i) {
    if (binaryNum[i] === "1") {
      binaryNum = binaryNum.slice(0, i + 1);
      break;
    }
  }

  let answer = 0;
  let consecutiveCnt = 0;
  for (let i = binaryNum.length - 1; i >= 0; --i) {
    if (binaryNum[i] === "1") {
      answer = Math.max(answer, consecutiveCnt);
      consecutiveCnt = 0;
      continue;
    }

    ++consecutiveCnt;
  }

  return answer;
}
