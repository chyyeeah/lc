/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  const store = {};
  strs.forEach(s => {
    let temp = {};
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (temp[char] == null) temp[char] = 0;
      temp[char]++;
    }
    let key = '';
    alphabet.split('').forEach(l => {
      if (temp[l] != null) {
        key += `${temp[l]}${l}`;
      }
    });
    if (store[key] == null) store[key] = [];
    store[key].push(s);
  })
  return Object.values(store);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["abets", "bead", "remain", "betas", "abed", "baste", "airline", "leading", "beast", "dealing", "beats", "airmen", "marine", "single", "bade", "aligned"]));
console.log(groupAnagrams(["tao", "pit", "cam", "aid", "pro", "dog"]));