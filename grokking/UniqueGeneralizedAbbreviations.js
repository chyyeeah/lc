const generate_generalized_abbreviation = function(word) {
  const result = [];
  const recurse = (idx, acc) => {
    if (idx < 0) {
      result.push(acc);
      return;
    };
    if (acc === '') {
      recurse(idx - 1, word[idx]);
      recurse(idx - 1, '1');
    } else {
      recurse(idx - 1, word[idx] + acc);
      if (isNaN(acc[0])) {
        recurse(idx - 1, '1' + acc);
      } else {
        const newNum = Number(acc[0]) + 1;
        recurse(idx - 1, `${newNum}` + acc.substring(1));
      }
    }
  };
  recurse(word.length - 1, '');
  return result;
};


console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation("BAT")}`)
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation("code")}`)
