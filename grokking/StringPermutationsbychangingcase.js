const find_letter_case_string_permutations = function (str) {
  const permutations = [''];
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let length = permutations.length;
    while (length > 0) {
      length--;
      const perm = permutations.shift();
      if (letters.indexOf(char) > -1) {
        permutations.push(perm + char.toUpperCase());
      }
      permutations.push(perm + char);
    }
  }
  return permutations;
};


console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)
