class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const tree_right_view = function(root) {
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    let length = queue.length;
    while (length > 0) {
      const node = queue.shift();
      length--;
      if (length === 0) result.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return result;
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log("Tree right view: " + tree_right_view(root))
