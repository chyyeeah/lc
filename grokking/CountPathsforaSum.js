class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const count_paths = function (root, S) {
  let result = 0;
  const recursive = (path, node) => {
    result += calcSubPathSumToTarget(path, S);
    if (node.left) {
      path.push(node.left.value);
      recursive(path, node.left);
      path.pop();
    }
    if (node.right) {
      path.push(node.right.value);
      recursive(path, node.right);
      path.pop();
    }
  };
  recursive([root.value], root);
  return result;
};

const calcSubPathSumToTarget = (path, target) => {
  let sum = 0;
  let count = 0;
  for (let i = path.length - 1; i >= 0; i--) {
    sum += path[i];
    if (sum === target) {
      count++;
    }
  }
  return count;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has paths: ${count_paths(root, 11)}`)

root = new TreeNode(1)
root.left = new TreeNode(7)
root.right = new TreeNode(9)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(2)
root.right.right = new TreeNode(3)
console.log(`Tree has paths: ${count_paths(root, 12)}`)
