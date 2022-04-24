/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class fakeMinHeap {
  constructor(sort) {
    this.store = [];
    this.sort = sort;
  }

  pop() {
    const poppedValue = this.store.pop();
    this.store.sort(this.sort);
    return poppedValue;
  }

  push(arg) {
    this.store.push(arg);
    this.store.sort(this.sort);
  }

  peek() {
    return this.store[this.store.length - 1];
  }

  size() {
    return this.store.length;
  }
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const falseHead = new ListNode();
  let current = falseHead;
  const sortingFunction = (a, b) => b.val - a.val;
  const minHeap = new fakeMinHeap(sortingFunction);
  lists.forEach(node => {
    if (node) minHeap.push(node);
  });
  while (minHeap.size() > 0) {
    const node = minHeap.pop();
    current.next = node;
    current = current.next;
    node.next && minHeap.push(node.next);
  }
  return falseHead.next;
};

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]));
console.log(mergeKLists([]));
console.log(mergeKLists([[]]));