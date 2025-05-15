// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @description Time complexity O(logN)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let maxDepth = 0;

    const searchDepth = (sPoint, depth) => {
        maxDepth = Math.max(maxDepth, depth);
        if (sPoint.left) {
            searchDepth(sPoint.left, depth + 1);
        }
        if (sPoint.right) {
            searchDepth(sPoint.right, depth + 1);
        }
    };
    searchDepth(root, 1);
    return maxDepth;
};
