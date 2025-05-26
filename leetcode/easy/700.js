// https://leetcode.com/problems/search-in-a-binary-search-tree/description/?envType=study-plan-v2&envId=leetcode-75
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    let target = null;
    const dfs = (node) => {
        if (node.val === val) {
            target = node;
            return;
        }

        if (node.left !== null) {
            dfs(node.left);
        }
        if (node.right !== null) {
            dfs(node.right);
        }
    };

    dfs(root);
    return target;
};
