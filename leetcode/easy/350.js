// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

// time complexity O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = new Map();
    const answer = [];

    for (const n of nums1) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    for (const n of nums2) {
        if (map.get(n)) {
            answer.push(n);
            map.set(n, map.get(n) - 1);
        }
    }

    return answer;
};

// time complexity O(nlogn)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0,
        j = 0;
    let result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            ++i;
            ++j;
        } else if (nums1[i] < nums2[j]) {
            ++i;
        } else {
            ++j;
        }
    }
    return result;
};
