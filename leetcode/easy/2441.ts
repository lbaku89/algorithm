// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
// time complexity O(n)
// space complexity O(n)

function findMaxK(nums: number[]): number {
  const set = new Set<number>();
  let answer = -1;

  for (const n of nums) {
    set.add(n);
    if (set.has(-n)) {
      answer = Math.max(answer, Math.abs(n));
    }
  }

  return answer;
}
