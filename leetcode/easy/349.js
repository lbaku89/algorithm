/**
 * @time complexity O(n)  { num1.length  + num2.length ...}
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const dictionary = {};
  for (const num of nums1) {
    dictionary[num] = 1;
  }

  const answer = [];
  const alreadyPushed = {};

  for (const num of nums2) {
    if (alreadyPushed[num]) {
      continue;
    }

    if (dictionary[num]) {
      answer.push(num);
      alreadyPushed[num] = 1;
    }
  }

  return answer;
};
