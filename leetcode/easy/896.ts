/**
 * @source https://leetcode.com/problems/monotonic-array/
 */

function isMonotonic(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }

  let monotoneType;

  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i + 1] === nums[i]) {
      continue;
    }

    if (monotoneType === undefined) {
      monotoneType = nums[i + 1] > nums[i] ? true : false;
      continue;
    }

    let nowType = nums[i + 1] > nums[i] ? true : false;
    if (nowType !== monotoneType) {
      return false;
    }
  }

  return true;
}
