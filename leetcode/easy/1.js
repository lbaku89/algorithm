/**
 * @source https://leetcode.com/problems/two-sum/
 */

/**
 * time complexity O(n)
 * space complexity O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const store = {};

  for (let i = 0; i < nums.length; ++i) {
    const diff = target - nums[i];
    if (store[diff] !== undefined) {
      return [store[diff], i];
    }

    store[n] = i;
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const store = {};

  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i];

    if (store[target - n] !== undefined) {
      return [store[target - n], i];
    }

    store[n] = i;
  }
};

/**
 * @OptimizedSolution
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i];
    const diff = target - n;
    if (seen.get(diff) !== undefined) {
      return [seen.get(diff), i];
      break;
    }
    seen.set(n, i);
  }
};

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

/**
 * ----------not optimized solution--------------------------------------------------------------------------------
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  nums.forEach((n, idx) => {
    if (map[n]) {
      map[n].push(idx);
    } else {
      map[n] = [idx];
    }
  });

  const answer = [];
  for (let i = 0; i < nums.length; ++i) {
    const rest = target - nums[i];
    if (map[rest]) {
      const restIdx = map[rest].find((idx) => idx !== i);
      if (restIdx !== undefined) {
        answer.push(i, restIdx);
        break;
      }
    }
  }

  return answer;
};
