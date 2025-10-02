/**
 * @source https://leetcode.com/problems/two-out-of-three/
 */

// time complexity O(n)
/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const dictionary1 = new Set(nums1),
    dictionary2 = new Set(nums2),
    dictionary3 = new Set(nums3);
  const set = new Set();

  dictionary1.forEach((n) => {
    if (dictionary2.has(n) || dictionary3.has(n)) {
      set.add(n);
    }
  });

  dictionary2.forEach((n) => {
    if (dictionary1.has(n) || dictionary3.has(n)) {
      set.add(n);
    }
  });

  return [...set];
};
