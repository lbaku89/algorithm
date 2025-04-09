// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

/**
 * second try
 * time complexity O(n)
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    let arr = nums.slice(0, 4);

    arr.sort((a, b) => b - a);

    for (let i = 4; i < nums.length; ++i) {
        let n = nums[i];

        if (n < arr[3]) {
            arr[2] = arr[3];
            arr[3] = n;
        } else if (n < arr[2]) {
            arr[2] = n;
        } else if (n > arr[0]) {
            arr[1] = arr[0];
            arr[0] = n;
        } else if (n > arr[1]) {
            arr[1] = n;
        }
    }

    return arr[0] * arr[1] - arr[2] * arr[3];
};

/**
 * first try
 * time complexity O(nlogn)
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    nums.sort((a, b) => b - a);

    return nums[0] * nums[1] - nums.at(-1) * nums.at(-2);
};
