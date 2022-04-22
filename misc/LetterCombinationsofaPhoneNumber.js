const digitsMapping = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const result = [];
  if (digits.length < 1) return result;
  const recurse = (idx, acc) => {
    if (idx >= digits.length) {
      result.push(acc);
      return;
    }
    const digit = digits[idx];
    const letters = digitsMapping[digit];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      recurse(idx + 1, acc + letter);
    }
  };
  recurse(0, '');
  return result;
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));