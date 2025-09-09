/**
 * @source https://app.codility.com/c/close/training92FNZN-R5N
 */
function solution(A, K) {
  let l = A.length;

  let answer = new Array(l).fill(0);
  A.forEach((num, i) => {
    let newIdx = (K + i) % l;
    answer[newIdx] = num;
  });

  return answer;
}
