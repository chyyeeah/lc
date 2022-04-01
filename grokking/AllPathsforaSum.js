class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_paths = function (root, sum) {
  const allPaths = [];
  const stack = [[[root.value], root]];
  while (stack.length > 0) {
    const [path, node] = stack.pop();
    const isLeaf = !node.left && !node.right;
    const value = path.reduce((acc, n) => acc + n, 0);
    if (value === sum && isLeaf) {
      allPaths.push(path.slice());
    }
    node.left && stack.push([path.concat(node.left.value), node.left]);
    node.right && stack.push([path.concat(node.right.value), node.right]);
  }
  return allPaths;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
