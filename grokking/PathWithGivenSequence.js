class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};



const find_path = function (root, sequence) {
  const stack = [[0, root]];
  const length = sequence.length;
  while (stack.length > 0) {
    const [idx, node] = stack.pop();
    if (sequence[idx] === node.value) {
      if (idx === length - 1) return true;
      node.left && stack.push([idx + 1, node.left]);
      node.right && stack.push([idx + 1, node.right]);
    }
  }
  return false;
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
