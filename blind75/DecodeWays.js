/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = new Array(s.length).fill(null);
  const recurse = (i) => {
    if (dp[i] != null) return dp[i];
    if (s[i] === '0') return 0;
    if (i >= s.length) return 1;
    let sum = 0;
    sum += recurse(i + 1);
    const doubleDigit = Number(s[i] + s[i + 1]);
    if (doubleDigit <= 26) {
      sum += recurse(i + 2);
    }
    dp[i] = sum;
    return dp[i];
  };
  return recurse(0);
};

console.log(numDecodings('12'));
console.log(numDecodings('226'));
console.log(numDecodings('11106'));