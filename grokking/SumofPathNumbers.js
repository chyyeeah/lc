class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_sum_of_path_numbers = function(root) {
  let result = 0;
  const stack = [[[root.value], root]];
  while (stack.length > 0) {
    const [path, node] = stack.pop();
    const isLeaf = !node.left && !node.right;
    if (isLeaf) {
      const num = Number(path.join(''));
      result += num;
    }
    node.left && stack.push([path.concat(node.left.value), node.left]);
    node.right && stack.push([path.concat(node.right.value), node.right]);
  }

  return result;
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)
