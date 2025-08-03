/**
 * @source https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let answer = undefined

    const dfs =(root,p,q)=>{
        
        if(!root){
            return root
        }

        if(root===p||root===q){
            return root
        }

        const left = dfs(root.left,p,q)
        const right= dfs(root.right,p,q)

        if(left&&right){
            return root
        }
    
        return left || right 
    }
    answer = dfs(root,p,q)

    return answer 
    
};