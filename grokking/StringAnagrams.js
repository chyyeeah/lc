const find_string_anagrams = function(str, pattern) {
  const result = [];
  let store = set_store(pattern);
  let matches = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (store[char] != null) {
      store[char]--;
      if (store[char] === 0) matches++;
    }

    if (matches === Object.keys(store).length) {
      result.push(left);
    }

    if (right >= pattern.length - 1) {
      const leftChar = str[left];
      if (store[leftChar] != null) {
        if (store[leftChar] === 0) matches--;
        store[leftChar]++;
      }
      left++;
    }
  }
  
  return result;
};

const set_store = (pattern) => {
  const result = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (result[char] == null) result[char] = 0;
    result[char]++;
  }

  return result;
};

console.log(find_string_anagrams('ppqp', 'pq'));
console.log(find_string_anagrams('abbcabc', 'abc'));