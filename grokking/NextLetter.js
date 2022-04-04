const search_next_letter = function(letters, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const keyIndex = alphabet.indexOf(key);
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const midIndex = alphabet.indexOf(letters[mid]);
    if (midIndex === keyIndex) {
      const afterMid = mid + 1;
      return afterMid > letters.length - 1 ? letters[0] : letters[afterMid];
    }
    if (keyIndex > midIndex) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start >= letters.length - 1 ? letters[0] : letters[start];
};


console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))
