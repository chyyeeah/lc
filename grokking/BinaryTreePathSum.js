class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const has_path = function (root, sum) {
  const stack = [[root.value, root]];
  while (stack.length > 0) {
    const [value, node] = stack.pop();
    if (!node.left && !node.right && value === sum) {
      return true;
    }
    node.left && stack.push([value + node.left.value, node.left]);
    node.right && stack.push([value + node.right.value, node.right]);
  }
  return false;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
