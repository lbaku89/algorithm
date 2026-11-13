/**
 * @problem https://school.programmers.co.kr/learn/courses/30/lessons/42578
 */
function solution(clothes) {
  const clothMap = new Map();

  for (const [cloth, kind] of clothes) {
    if (clothMap.has(kind)) {
      clothMap.set(kind, clothMap.get(kind) + 1);
    } else {
      clothMap.set(kind, 1);
    }
  }

  const answer = clothMap.values().reduce((acc, cur) => {
    return acc * (cur + 1);
  }, 1);

  return answer - 1;
}
