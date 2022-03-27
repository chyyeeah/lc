const longest_substring_with_k_distinct = function(str, k) {
  const hash = {};
  let result = 0;
  let tracker = 0;
  let numUniqueChars = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (hash[char] == null) hash[char] = 0;
    if (hash[char] === 0) numUniqueChars++;
    hash[char]++;
    tracker++;
    while (numUniqueChars > k) {
      const leftChar = str[left];
      hash[leftChar]--;
      left++;
      tracker--;
      if (hash[leftChar] === 0) numUniqueChars--;
    }
    result = Math.max(result, tracker);
  }
  return result;
};

console.log(longest_substring_with_k_distinct('araaci', 2));
console.log(longest_substring_with_k_distinct('araaci', 1));
console.log(longest_substring_with_k_distinct('cbbebi', 3));
console.log(longest_substring_with_k_distinct('cbbebi', 10));