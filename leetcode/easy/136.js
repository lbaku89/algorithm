// https://leetcode.com/problems/single-number/

// time complexity O(n)
// space complexity O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const set = new Set();

  // 시간 복잡도 O(n)
  for (const num of nums) {
    set.has(num) ? set.delete(num) : set.add(num);
  }

  // 시간 복잡도 O(n), 공간 복잡도 O(n)
  return Array.from(set)[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.has(num) ? map.delete(num) : map.set(num, true);
  }

  const obj = Object.fromEntries(map);
  for (const answer in obj) {
    return Number(answer);
  }
};
