// https://leetcode.com/problems/leaf-similar-trees/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const forward = (root, arr) => {
        if (root.left === null && root.right === null) {
            arr.push(root.val);
            return;
        }

        if (root.left !== null) {
            forward(root.left, arr);
        }
        if (root.right !== null) {
            forward(root.right, arr);
        }
    };

    let arr1 = [];
    let arr2 = [];
    forward(root1, arr1);
    forward(root2, arr2);

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};
