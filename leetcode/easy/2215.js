// https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);

    nums2 = [...nums2].filter((v) => {
        if (nums1.has(v)) {
            nums1.delete(v);
            return false;
        } else {
            return true;
        }
    });

    return [[...nums1], nums2];
};

// test case
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
