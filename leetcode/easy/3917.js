/**
 * @source https://leetcode.com/problems/count-indices-with-opposite-parity/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function (nums) {
  let oddCnt = 0;
  let evenCnt = 0;
  const answer = Array(nums.length).fill(0);

  for (let i = nums.length - 1; i >= 0; --i) {
    const n = nums[i];
    if (n % 2 === 0) {
      answer[i] = oddCnt;
    } else {
      answer[i] = evenCnt;
    }
    n % 2 === 0 ? ++evenCnt : ++oddCnt;
  }
  return answer;
};
