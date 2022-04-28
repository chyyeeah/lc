/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = {};
  nums.forEach(n => {
    if (freqMap[n] == null) freqMap[n] = 0;
    freqMap[n]++;
  });
  const sortFunc = (a, b) => a.freq - b.freq;
  const fakeMaxHeap = new FakeMaxHeap(sortFunc);
  Object.keys(freqMap).forEach(num => {
    fakeMaxHeap.push({num, freq: freqMap[num]});
  });
  const result = [];
  while (k > 0) {
    const {num} = fakeMaxHeap.pop();
    result.push(num);
    k--;
  }
  return result;
};

class FakeMaxHeap {
  constructor (sortFunc) {
    this.store = [];
    this.sortFunc = sortFunc;
  }

  push(val) {
    this.store.push(val);
    this.sort();
  }

  pop(){
    const val = this.store.pop();
    this.sort();
    return val;
  }

  sort() {
    this.store.sort(this.sortFunc);
  }

  size() {
    return this.store.length;
  }
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1], 1))