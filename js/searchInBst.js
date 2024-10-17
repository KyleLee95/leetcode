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

function dfs(root, val) {
  //base
  if (!root) {
    return root;
  }

  //found the root
  if (root.val === val) {
    return root;
  }

  //go left to search for smaller values
  if (root.val > val) {
    return dfs(root.left, val);
  }

  //go right to search for larger values
  if (root.val < val) {
    return dfs(root.right, val);
  }
}
var searchBST = function (root, val) {
  return dfs(root, val);
};
