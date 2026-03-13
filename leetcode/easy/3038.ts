//https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/

function maxOperations(nums: number[]): number {
  if (nums.length < 2) {
    return 0;
  }

  let idx = 0,
    count = 1;
  const sum = nums[idx] + nums[idx + 1];
  idx += 2;
  while (idx + 1 <= nums.length - 1) {
    if (nums[idx] + nums[idx + 1] !== sum) {
      break;
    }
    ++count;
    idx += 2;
  }

  return count;
}
