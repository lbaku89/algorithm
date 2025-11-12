/**
 * @problem https://leetcode.com/problems/binary-search/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid = Math.floor((left + right) / 2);

  if (target > nums.at(-1) || target < nums[0]) {
    return -1;
  }

  if (nums.length === 1) {
    if (nums[0] === target) {
      return 0;
    } else {
      return -1;
    }
  }

  while (left !== right) {
    if (nums[mid] === target) {
      return mid;
      break;
    }

    if (nums[mid] < target) {
      left = mid;
      mid = Math.floor((left + right) / 2);
    } else if (nums[mid] > target) {
      right = mid;
      mid = Math.floor((left + right) / 2);
    }

    if (right - left === 1) {
      if (nums[right] === target) {
        return right;
      } else if (nums[left] === target) {
        return left;
      }

      break;
    }
  }

  return -1;
};
