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
 * @param {number} targetSum
 * @return {number}
 */

const dfs = (root, pathSum, targetSum) => {
  if (!root) {
    return 0;
  }
  let targetSumCounts = 0;

  let rightPathSum = 0;
  let leftPathSum = 0;

  pathSum += root.val;

  if (pathSum === targetSum) {
    targetSumCounts += 1;
    pathSum = 0;
  }
  if (root.left) {
    leftPathSum = dfs(root.left, leftPathSum, targetSum);
  }
  if (root.right) {
    rightPathSum = dfs(root.right, rightPathSum, targetSum);
  }
  return targetSumCounts + rightPathSum + leftPathSum;
};
var pathSum = function (root, targetSum) {
  return dfs(root, targetSum);
};
