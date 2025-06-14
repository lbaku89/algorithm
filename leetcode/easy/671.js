// time complexity O(n)
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

var findSecondMinimumValue = function (root) {
    let min = root.val;
    let secondMin = Infinity;

    const dfs = (node) => {
        if (node.val < secondMin && node.val > min) {
            secondMin = node.val;
        }
        if (node.left) {
            dfs(node.left);
            dfs(node.right);
        }
    };

    dfs(root);

    return secondMin === Infinity ? -1 : secondMin;
};
