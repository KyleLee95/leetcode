/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

var maxLevelSum = function (root) {
  let max_sum = Number.NEGATIVE_INFINITY;
  let ans = 0;
  let level = 0;

  let q = [];
  q.push(root);

  while (q.length > 0) {
    level += 1;
    let sum_at_current_level = 0;
    let n = q.length; // Number of nodes at the current level

    for (let i = 0; i < n; i++) {
      let node = q.shift();
      sum_at_current_level += node.val;

      if (node.left !== null) {
        q.push(node.left);
      }
      if (node.right !== null) {
        q.push(node.right);
      }
    }

    if (max_sum < sum_at_current_level) {
      max_sum = sum_at_current_level;
      ans = level;
    }
  }

  return ans;
};
