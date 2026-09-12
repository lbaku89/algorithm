/**
 * @source https://leetcode.com/problems/merge-sorted-array/description/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const answer = [];
  let idx1 = 0,
    idx2 = 0;

  while (m !== 0 || n !== 0) {
    if (m > 0 && n > 0) {
      if (nums1[idx1] > nums2[idx2]) {
        answer.push(nums2[idx2]);
        ++idx2;
        n = n - 1;
      } else {
        answer.push(nums1[idx1]);
        ++idx1;
        m = m - 1;
      }
    } else if (m === 0) {
      answer.push(nums2[idx2]);
      ++idx2;
      --n;
    } else if (n === 0) {
      answer.push(nums1[idx1]);
      ++idx1;
      --m;
    }
  }

  answer.forEach((n, idx) => {
    nums1[idx] = n;
  });
};
