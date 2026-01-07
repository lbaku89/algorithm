/**
 * @source https://school.programmers.co.kr/learn/courses/30/lessons/60057
 */

function solution(s) {
  let min = Infinity;

  for (let pair = 1; pair < s.length; ++pair) {
    const firstSliced = s.slice(0, pair);

    let prevStr = firstSliced;
    let tempStr = firstSliced;
    let overlapCnt = 1;
    let compressed = "";

    for (let i = pair; i < s.length; i = i + pair) {
      const currentStr = s.slice(i, Math.min(i + pair, s.length));

      if (currentStr === prevStr) {
        tempStr = `${++overlapCnt}${prevStr}`;
      } else {
        compressed += tempStr;
        prevStr = currentStr;
        tempStr = currentStr;
        overlapCnt = 1;
      }
    }

    compressed += tempStr;
    min = Math.min(compressed.length, min);
  }

  return min;
}
