// One step right and then always left
function successor(root) {
  root = root.right;
  while (root.left) {
    root = root.left;
  }
  return root.val;
}

// One step left and then always right
function predecessor(root) {
  root = root.left;
  while (root.right) {
    root = root.right;
  }
  return root.val;
}

function deleteNode(root, key) {
  if (!root) {
    return null;
  }

  // delete from the right subtree
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  // delete from the left subtree
  else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  // delete the current node
  else {
    // the node is a leaf so we can just delete it
    if (!root.left && !root.right) {
      root = null;
    }

    // The node is not a leaf and has a right child
    //sow e have to find the *successor* which is the node with a value that would come immediately after the target node
    else if (root.right) {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    }
    // the node is not a leaf, has no right child, and has a left child, so we have to find the *predecessor*
    //which is the node with a value that would come immediately before the target node
    else {
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }

  return root;
}
