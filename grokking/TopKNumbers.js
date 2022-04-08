const Heap = require('collections/heap'); //http://www.collectionsjs.com

const find_k_largest_numbers = function (nums, k) {
  const minHeap = new Heap([], null, (a, b) => b - a);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    minHeap.push(num);
    if (minHeap.length > k) {
      minHeap.pop();
    }
  }
  return minHeap.toArray().slice(0, k);
};


console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`)
console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`)
