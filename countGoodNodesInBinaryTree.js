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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var goodNodes = function (root) {
  //cases
  //root is null
  //left is null
  //right is null
  //the current node is >= than the root node
  let counter = 0;

  function dfs(root, initX) {
    if (!root) {
      return 0;
    }

    if (root.val >= initX) {
      counter += 1;
    }
    if (root.left) {
      dfs(root.left, Math.max(initX, root.val));
    }
    if (root.right) {
      dfs(root.right, Math.max(initX, root.val));
    }
    return 0;
  }

  dfs(root, root.val);
  return counter;
};
const test = new TreeNode(
  3,
  new TreeNode(1, new TreeNode(3), new TreeNode(null)),
  new TreeNode(4, new TreeNode(1), new TreeNode(5)),
);

console.log(goodNodes(test));
