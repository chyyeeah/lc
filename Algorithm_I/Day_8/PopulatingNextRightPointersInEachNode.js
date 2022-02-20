/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function (root) {
    const store = [root];
    let prevNode;
    while (store.length > 0) {
        const num = store.length;
        for (let i = 0; i < num; i++) {
            const node = store.shift();
            if (prevNode) {
                prevNode.next = node;
            }
            if (i === (num - 1)) {
                prevNode = null;
            } else {
                prevNode = node;
            }
            if (node?.left) store.push(node.left);
            if (node?.right) store.push(node.right);
        }
    }
    return root;
};