const Heap = require('collections/heap'); //http://www.collectionsjs.com

const sort_character_by_frequency = function(str) {
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (freq[char] == null) freq[char] = 0;
    freq[char]++;
  }
  const maxHeap = new Heap([], null, (a, b) => a.length - b.length);
  Object.keys(freq).forEach(char => {
    maxHeap.push({char, length: freq[char]});
  });
  let result = '';
  while (maxHeap.length > 0) {
    const obj = maxHeap.pop();
    let i = 0;
    while (i < obj.length) {
      result += obj.char;
      i++;
    }
  }
  return result;
};


console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("Programming")}`)
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("abcbab")}`)
