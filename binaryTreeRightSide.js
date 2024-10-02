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
 * @return {number[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
Anything on the right branch of the root will take precedence over the
left branch barring the equivalent sibling doesn't existon the right side but does on the left.


When you perform BFS, you go from left -> right. So, the last node in the array
should be the rightmost.

**/

var rightSideView = function (root) {
  if (root === null) {
    return [];
  }

  const queue = [root];
  const rightside = [];

  while (queue.length > 0) {
    const levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();

      // if it's the rightmost element
      if (i === levelLength - 1) {
        rightside.push(node.val);
      }

      // add child nodes to the queue
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return rightside;
};
