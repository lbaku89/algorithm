// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// time complexity O(n)

function smallerNumbersThanCurrent(nums: number[]): number[] {
  // dp[idx] 는 idx 보다 작은 숫자 갯수
  // dp[idx] = dp[idx-1] + cnt[idx-1]

  const numsCount = Array(101).fill(0);
  nums.forEach((n) => {
    ++numsCount[n];
  });

  const dp = Array(101).fill(0);
  for (let i = 1; i <= 100; ++i) {
    dp[i] = dp[i - 1] + numsCount[i - 1];
  }

  return nums.map((n) => dp[n]);
}
// function smallerNumbersThanCurrent(nums: number[]): number[] {
//   const count = new Array(101).fill(0);

//   for (const n of nums) {
//     count[n]++;
//   }

//   for (let i = 1; i < 101; i++) {
//     count[i] += count[i - 1];
//   }

//   return nums.map((n) => {
//     if (n === 0) return 0;
//     return count[n - 1];
//   });
// }
