/**
 * @source https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */

function solution(progresses, speeds) {
  let answer = [];
  let i = 0;

  while (i < progresses.length) {
    let duration = Math.ceil((100 - progresses[i]) / speeds[i]);
    let cnt = 0;
    for (let idx = i; idx < progresses.length; ++idx) {
      if (progresses[idx] + duration * speeds[idx] >= 100) {
        i = idx;
        ++cnt;
      } else {
        break;
      }
    }
    ++i;
    answer.push(cnt);
  }
  return answer;
}
