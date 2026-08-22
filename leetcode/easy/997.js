/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // 신용하는 사람카운트
  const arr1 = Array(n + 1).fill(0);
  // 몇명에게 신용받는지 카운트
  const arr2 = Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    ++arr1[a];
    ++arr2[b];
  }
  let answer = -1;
  for (let i = 1; i < arr1.length; ++i) {
    if (arr1[i] === 0 && arr2[i] === n - 1) {
      answer = i;
      break;
    }
  }
  return answer;
};
