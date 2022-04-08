const Heap = require("collections/heap");

const minimum_cost_to_connect_ropes = function (ropeLengths) {
  const minHeap = new Heap([], null, (a, b) => b - a);
  // const sums = [];
  let result = 0;
  ropeLengths.forEach(l => minHeap.push(l));

  while (minHeap.length > 1) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const sum = first + second;
    result += sum;
    // sums.push(sum);
    minHeap.push(sum);
  }
  return result;
  // return sums.reduce((acc, s) => acc += s, 0);
};


console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`)
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`)
