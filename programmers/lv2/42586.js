/**
 * @source https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */

function solution(progresses, speeds) {
  const days = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx]);
  });

  const answer = [];

  let cnt = 0;
  let standard = days[0];

  for (let i = 0; i < days.length; ++i) {
    if (standard >= days[i]) {
      ++cnt;
    } else {
      answer.push(cnt);
      standard = days[i];
      cnt = 1;
    }
  }

  if (cnt) {
    answer.push(cnt);
  }

  return answer;
}

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
