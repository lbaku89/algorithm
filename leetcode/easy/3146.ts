/**
 * @problem https://leetcode.com/problems/permutation-difference-between-two-strings/
 */

function findPermutationDifference(s: string, t: string): number {
  let answer = 0;
  const map = new Map();

  for (let i = 0; i < s.length; ++i) {
    map.set(s[i], i);
  }
  for (let i = 0; i < s.length; ++i) {
    answer += Math.abs(map.get(t[i]) - i);
  }
  return answer;
}
