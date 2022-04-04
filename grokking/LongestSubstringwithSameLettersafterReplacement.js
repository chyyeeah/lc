const length_of_longest_substring = function (str, k) {
  const store = {};
  let result = 0;
  let max = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (store[char] == null) store[char] = 0;
    store[char]++;
    max = Math.max(max, store[char]);
    if ((right - left + 1) > (max + k)) {
      const leftChar = store[left];
      store[leftChar]--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

console.log(length_of_longest_substring('aabccbb', 2) === 5);
console.log(length_of_longest_substring('abbcb', 1) === 4);
console.log(length_of_longest_substring('abccde', 1) === 3);