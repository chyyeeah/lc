const Heap = require('collections/heap'); //http://www.collectionsjs.com

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.minHeap = new Heap([...nums], null, (a, b) => b - a);
    this.k = k;
    this.calibrateHeap();
  }

  calibrateHeap() {
    while (this.minHeap.length > this.k) {
      this.minHeap.pop();
    }
  }

  add(num) {
    this.minHeap.push(num);
    this.calibrateHeap();
    return this.minHeap.peek();
  }
};


kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`)
