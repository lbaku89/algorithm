/**
 * @problem https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/?envType=problem-list-v2&envId=breadth-first-search
 */

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  const nodes = [root];
  let answer = 0;
  let idx = 0;
  while (idx < nodes.length) {
    const l = nodes.length;

    while (idx < l) {
      const node = nodes[idx];
      if (node.children !== null) {
        nodes.push(...node.children);
      }
      ++idx;
    }
    ++answer;
  }

  return answer;
};
