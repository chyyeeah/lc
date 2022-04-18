const Heap = require('collections/heap');

const find_maximum_distinct_elements = function (nums, k) {
  const minHeap = new Heap([], null, (a, b) => b.numFreq - a.numFreq);
  const freq = {};
  nums.forEach(num => {
    if (freq[num] == null) freq[num] = 0;
    freq[num]++;
  });
  Object.keys(freq).forEach(num => {
    if (freq[num] > 1) {
      const obj = { num, numFreq: freq[num] };
      minHeap.push(obj);
    }
  });
  while (k > 0 && minHeap.length > 0) {
    const { num } = minHeap.pop();
    freq[num]--;
    if (freq[num] > 1) {
      minHeap.push({ num, freq: freq[num] });
    }
    k--;
  }
  let result = 0;
  for (let key in freq) {
    if (freq[key] === 1) result++;
  }
  return result - k;
};

console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([7, 3, 5, 8, 5, 3, 3], 2)}`)
console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([3, 5, 12, 11, 12], 3)}`)
console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)}`)

