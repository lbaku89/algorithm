/**
 * @source https://leetcode.com/problems/contains-duplicate-ii/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (k === 0) {
    return false;
  }

  // k>=1
  const map = {};
  for (let i = 0; i <= Math.min(k, nums.length - 1); ++i) {
    const key = nums[i];
    map[key] = (map[key] || 0) + 1;

    if (map[key] >= 2) {
      return true;
    }
  }

  let left = 0,
    right = Math.min(k, nums.length - 1);

  while (right < nums.length - 1) {
    //left 빼고
    // right+1 더하고
    map[nums[left]] -= 1;
    ++left;

    ++right;
    map[nums[right]] = (map[nums[right]] || 0) + 1;

    if (map[nums[right]] >= 2) {
      return true;
      break;
    }
  }

  return false;
};
