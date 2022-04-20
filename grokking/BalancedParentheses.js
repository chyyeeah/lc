const generate_valid_parentheses = function (num) {
  const result = [];
  const recurse = (numLeft, numRight, acc) => {
    if (numLeft === num && numRight === num) {
      result.push(acc);
    }
    if (numLeft < num) {
      recurse(numLeft + 1, numRight, acc + '(');
    }
    if (numLeft > numRight) {
      recurse(numLeft, numRight + 1, acc + ')');
    }
  };
  recurse(0, 0, '');
  return result;
};


console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2)}`)
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`)
