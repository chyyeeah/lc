/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    if (root1 == null && root2 == null) return null;
   const newNode = new TreeNode((root1?.val ?? 0) + (root2?.val ?? 0));

   if (root1?.left || root2?.left) {
       newNode.left = mergeTrees(root1?.left, root2?.left);
   }

   if (root1?.right || root2?.right) {
       newNode.right = mergeTrees(root1?.right, root2?.right);
   }

   return newNode;
};

let root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(5);

let root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);

console.log(mergeTrees(root1, root2));