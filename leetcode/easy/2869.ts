// https://leetcode.com/problemset/algorithms/

function minOperations(nums: number[], k: number): number {
  const set = new Set();
  for (let i = 1; i <= k; ++i) {
    set.add(i);
  }

  for (let i = nums.length - 1; i >= 0; --i) {
    set.delete(nums[i]);
    if (set.size === 0) {
      return nums.length - i;
    }
  }

  return -1;
}
