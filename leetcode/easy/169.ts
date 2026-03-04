// https://leetcode.com/problems/majority-element/description/

function majorityElement(nums: number[]): number | undefined {
  const counts = new Map();

  for (const n of nums) {
    counts.set(n, (counts.get(n) ?? 0) + 1);
    if (counts.get(n) >= nums.length / 2) {
      return n;
    }
  }
}
