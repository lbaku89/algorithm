/**
 * @source https://leetcode.com/problems/two-sum/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const record = {};
  let answer = undefined;
  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i];

    if (record[n]) {
      record[n].push(i);
    } else {
      record[n] = [i];
    }
    const diff = target - n;

    // 같은 수일 때
    if (diff === n && record[n].length >= 2) {
      answer = record[n];
      break;
    } else if (diff !== n && record[diff]) {
      answer = [...record[diff], i];
      break;
    }
  }

  return answer;
};
