/**
 * timeComplexity O(n)
 */
function alternatingSum(nums: number[]): number {
  return nums.reduce((acc, cur, idx) => {
    return idx % 2 === 0 ? (acc += cur) : (acc -= cur);
  }, 0);
}
