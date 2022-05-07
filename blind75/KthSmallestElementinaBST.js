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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const store = [];
  const recurse = (node) => {
    if (node == null) return;
    node.left && recurse(node.left);
    store.push(node.val);
    node.right && recurse(node.right);
  };
  recurse(root);
  return store[k - 1];
};