const Heap = require('collections/heap');

const find_Kth_smallest = function (lists, k) {
  const minHeap = new Heap(
    [...lists].map(l => [0, l]),
    null,
    (a, b) => {
      const idxA = a[0];
      const idxB = b[0];
      const listA = a[1];
      const listB = b[1];
      return listB[idxB] - listA[idxA];
    }
  );
  while (k > 1) {
    const list = minHeap.pop();
    k--;
    console.log(list);
    list[0]++;
    if (list[0] < list[1].length) {
      minHeap.push(list);
    }
  }
  const list = minHeap.peek();
  return list[1][list[0]];
};


console.log(`Kth smallest number is: ${find_Kth_smallest([[2, 6, 8], [3, 6, 7], [1, 3, 4]], 5)}`)
