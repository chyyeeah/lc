class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const find_minimum_depth = function (root) {
  const queue = [[1, root]];
  while (queue.length > 0) {
    const [level, node] = queue.shift();
    if (!node.left && !node.right) {
      return level;
    }
    node.left && queue.push([level + 1, node.left]);
    node.right && queue.push([level + 1, node.right]);
  }
  return -1;
};

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
