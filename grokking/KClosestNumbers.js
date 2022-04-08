const Heap = require('collections/heap'); //http://www.collectionsjs.com

const find_closest_elements = function (arr, K, X) {
  const maxHeap = new Heap([...arr], null, (a, b) => Math.abs(a - X) - Math.abs(b - X))
  while (maxHeap.length > K) {
    maxHeap.pop();
  }
  return maxHeap.toArray().sort((a, b) => a - b);
};

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`)
