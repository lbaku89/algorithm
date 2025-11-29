// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/\

// time complexity O(n)
// space complexity O(n)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = {};
  const n = numbers.length;

  for (let idx = 0; idx < n; ++idx) {
    const curNum = numbers[idx];

    if (map[target - curNum] !== undefined) {
      return [map[target - curNum], idx + 1];
    }

    map[curNum] = idx + 1;
  }
};
