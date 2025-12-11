// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * time complexity O(n)
 * space complexity O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = Array(nums.length).fill(1);
  const right = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; ++i) {
    const multiplied = i >= 1 ? left[i - 1] * nums[i] : nums[i];
    left[i] = multiplied;
  }
  for (let i = nums.length - 1; i >= 0; --i) {
    const multiplied = i !== nums.length - 1 ? right[i + 1] * nums[i] : nums[i];
    right[i] = multiplied;
  }

  return Array(nums.length)
    .fill(1)
    .map((_, i) => {
      let multiplied = 1;

      if (i >= 1) {
        multiplied *= left[i - 1];
      }
      if (i <= nums.length - 2) {
        multiplied *= right[i + 1];
      }

      return multiplied;
    });
};

// time complexity O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = 1;
  let zeroIdx = [];

  nums.forEach((n, i) => {
    if (n === 0) {
      zeroIdx.push(i);
    } else {
      result *= n;
    }
  });

  if (zeroIdx.length > 1) {
    return Array(nums.length).fill(0);
  } else if (zeroIdx.length === 1) {
    let arr = Array(nums.length).fill(0);
    arr[zeroIdx[0]] = result;
    return arr;
  } else {
    let arr = Array(nums.length).fill(result);
    nums.forEach((n, i) => {
      arr[i] = Math.floor(arr[i] / n);
    });
    return arr;
  }
};

// other solution
// time complexity O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answer = Array(nums.length).fill(1);
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = answer[i] * left;
    left = left * nums[i];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right = right * nums[i];
  }
  return answer;
};
