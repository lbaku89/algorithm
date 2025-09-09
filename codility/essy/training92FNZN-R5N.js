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

/**
 * @bestSolution 최적화
 */
function solution(A, K) {
  let l = A.length;

  if (l === 0) {
    return [];
  }

  let shift = K % l;

  return A.slice(-shift).concat(A.slice(0, l - k));
}
