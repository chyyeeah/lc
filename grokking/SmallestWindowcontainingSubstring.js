const find_substring = function (str, pattern) {
  let minLength = Infinity;
  let result = "";
  let left = 0;
  let matches = 0;

  const store = {};
  for (let i = 0; i < pattern.length; i++) {
    if (store[pattern[i]] == null) store[pattern[i]] = 0;
    store[pattern[i]]++;
  }

  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (store[char] != null) {
      store[char]--;
      if (store[char] === 0) {
        matches++;
      }
    }

    while (matches === Object.keys(store).length) {
      const leftChar = str[left];
      const length = right - left + 1;
      if (length < minLength) {
        minLength = length;
        result = str.slice(left, right + 1);
      }
      if (store[leftChar] != null) {
        if (store[leftChar] === 0) matches--;
        store[leftChar]++;
      }
      left++;
    }
  }

  return result;
}

console.log(find_substring('aabdec', 'abc'));
console.log(find_substring('aabdec', 'abac'));
console.log(find_substring('abdbca', 'abc'));
console.log(find_substring('adcad', 'abc'));