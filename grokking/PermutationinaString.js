let find_permutation = function (str, pattern) {
  const master = {};
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (master[char] == null) master[char] = 0;
    master[char]++;
  }
  let store = { ...master };
  let left;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (store[char] == null) {
      if (left != null) {
        i = left;
        left = null;
      }
      store = { ...master };
    } else {
      if (left == null) left = i;
      store[char]--;
      if (store[char] === 0) delete store[char];
      if (Object.keys(store).length < 1) return true;
    }
  }
  return false;
};

find_permutation = function (str, pattern) {
  const store = {};
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (store[char] == null) store[char] = 0;
    store[char]++;
  }
  let left = 0;
  let matches = 0;
  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (store[char] != null) {
      store[char]--;
      if (store[char] === 0) {
        matches++;
      }
    }

    if (Object.keys(store).length === matches) return true;

    if (right >= pattern.length - 1) {
      const leftChar = str[left];
      if (store[leftChar] === 0) matches--;
      if (store[leftChar] != null) store[leftChar]++;
      left++;
    }
  }
  return false;
};

console.log(find_permutation('oidbcaf', 'abc'));
console.log(find_permutation('odicf', 'dc'));
console.log(find_permutation('bcdxabcdy', 'bcdyabcdx'));
console.log(find_permutation('aaaacb', 'abc'));