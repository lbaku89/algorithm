// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// time complexity O(n)

function smallerNumbersThanCurrent(nums: number[]): number[] {
  const count = new Array(101).fill(0);

  for (const n of nums) {
    count[n]++;
  }

  for (let i = 1; i < 101; i++) {
    count[i] += count[i - 1];
  }

  return nums.map((n) => {
    if (n === 0) return 0;
    return count[n - 1];
  });
}
