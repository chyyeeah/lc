const Heap = require("collections/heap");

const find_k_frequent_numbers = function (nums, k) {
  const topNumbers = [];
  const freq = {};
  nums.forEach(n => {
    if (freq[n] == null) freq[n] = 0;
    freq[n]++;
  });
  // const freqArr = [];
  // for (let num in freq) {
  //   freqArr.push({num, freq: freq[num]})
  // }
  const minHeap = new Heap([], null, (a, b) => b.freq - a.freq);
  // freqArr.forEach(obj => {
  //   minHeap.push(obj);
  //   if (minHeap.length > k) minHeap.pop();
  // })
  Object.keys(freq).forEach(num => {
    minHeap.push({ num, freq: freq[num] });
    if (minHeap.length > k) minHeap.pop();
  });
  return minHeap.toArray().map(obj => obj.num);
};


console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)
