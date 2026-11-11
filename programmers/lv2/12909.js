/**
 * @problem https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(s) {
  let stack = 0;

  for (const arrow of s.split("")) {
    if (arrow === "(") {
      ++stack;
    } else if (arrow == ")") {
      --stack;
      if (stack < 0) {
        return false;
      }
    }
  }

  return stack === 0 ? true : false;
}
