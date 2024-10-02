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

//DFS -

// Runtime: O(2n) where n = # nodes
// Space complexity: O(2l) where l = # leaf nodes
function helper(root, output) {
  //cases:
  //- root is null
  //- left child is null
  //- right child is null
  if (root !== null) {
    const hasChildren = root.left || root.right;
    if (root.val && !hasChildren) {
      output.push(root.val);
    }
    helper(root.left, output);
    helper(root.right, output);
  }
}

var leafSimilar = function (root1, root2) {
  //either doesn't exist
  const output1 = [];
  const output2 = [];
  if (!root1 || !root2) {
    return false;
  }
  helper(root1, output1);
  helper(root2, output2);

  return (
    output1.length === output2.length &&
    output1.every((v, i) => v === output2[i])
  );
};
