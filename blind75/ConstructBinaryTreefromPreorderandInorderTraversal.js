/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if (preorder.length < 1 || inorder.length < 1) return null;
    const val = preorder[0];
    const node = new TreeNode(val);
    const mid = inorder.indexOf(val);
    const preorderLeftPart = preorder.slice(1, mid + 1);
    const preorderRightPart = preorder.slice(mid, preorder.length);
    node.left = buildTree(preorderLeftPart, inorder.slice(0, mid));
    node.right = buildTree(preorderRightPart, inorder.slice(mid + 1, inorder.length));
    return node;
};