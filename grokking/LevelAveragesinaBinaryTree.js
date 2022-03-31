class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_level_averages = function(root) {
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const vals = [];
    let length = queue.length;
    while (length > 0) {
      length--;
      const node = queue.shift();
      vals.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    const avg = get_average(vals);
    result.push(avg);
  }
  return result;
};

const get_average = (arr) => {
  let sum = 0;
  arr.forEach(n => sum += n);
  return sum / arr.length;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)
