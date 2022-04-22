/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const backtrack = (o, c, acc) => {
    if (c === n) {
      result.push(acc);
      return;
    }
    if (o < n) {
      backtrack(o + 1, c, acc + '(');
    }
    if (c < o) {
      backtrack(o, c + 1, acc + ')');
    }
  };
  backtrack(0, 0, '');
  return result;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));