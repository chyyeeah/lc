class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const traverse = function(root) {
  const result = [];
  const queue = [root];
  let isRight = true;
  while (queue.length > 0) {
    let length = queue.length;
    const temp = [];
    while (length > 0) {
      length--;
      const node = queue.shift();
      if (isRight) {
        temp.push(node.value);
      } else {
        temp.unshift(node.value);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    isRight = !isRight;
    result.push(temp);
  }
  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)
