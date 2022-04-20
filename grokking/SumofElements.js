const Heap = require('collections/heap');

const find_sum_of_elements = function (nums, k1, k2) {
  const minHeap = new Heap([], null, (a, b) => b - a);
  nums.forEach(num => minHeap.push(num));
  let startingLength = k1;
  while (startingLength > 0) {
    startingLength--;
    minHeap.pop();
  }
  let result = 0;
  let middle = k2 - k1 - 1;
  while (middle > 0) {
    middle--;
    const num = minHeap.pop();
    result += num;
  }
  return result;
};


console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`)
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([3, 5, 8, 7], 1, 4)}`)
