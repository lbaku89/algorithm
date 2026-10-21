/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
  for (let i = 0; i < nums.length; ++i) {
    let sum = 0;
    for (const cha of String(nums[i])) {
      sum += Number(cha);
    }

    if (sum === i) return i;
  }
  return -1;
};
