const non_repeat_substring = function(str) {
  const store = new Set();
  let result = 0;
  let tracker = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    while (store.has(char)) {
      const leftChar = str[left];
      store.delete(leftChar);
      tracker--;
      left++;
    }
    store.add(char);
    tracker++;
    result = Math.max(result, tracker);
  }
  return result;
};

console.log(non_repeat_substring('aabccbb'));
console.log(non_repeat_substring('abbbb'));
console.log(non_repeat_substring('abccde'));