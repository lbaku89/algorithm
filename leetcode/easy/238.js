// https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            if (i !== j) {
                nums[i] = 0;
            }
            ++j;
        }
    }

    return nums;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0;
    let zeroCnt = 0;
    while (i < nums.length - zeroCnt) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            ++zeroCnt;
        } else {
            ++i;
        }
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
