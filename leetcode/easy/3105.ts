//https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/

function longestMonotonicSubarray(nums: number[]): number {
  let answer = 1;
  let increasing = [nums[0]];
  let decreasing = [nums[0]];

  for (let i = 1; i < nums.length; ++i) {
    const num = nums[i];
    if (increasing.at(-1)! < num) {
      increasing.push(num);
    } else {
      increasing = [num];
    }
    answer = Math.max(answer, increasing.length);

    if (decreasing.at(-1)! > num) {
      decreasing.push(num);
    } else {
      decreasing = [num];
    }
    answer = Math.max(answer, decreasing.length);
  }
  return answer;
}
