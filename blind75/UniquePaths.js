/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(-1));
  const generatePaths = (m, n, r, c) => {
    if (dp[r][c] != -1) return dp[r][c];
    if (r === m - 1 && c === n - 1) return 1;
    let sum = 0;
    if (r < m) {
      sum += generatePaths(m, n, r + 1, c);
    }
    if (c < n) {
      sum += generatePaths(m, n, r, c + 1);
    }
    dp[r][c] = sum;
    return sum;
  };
  return generatePaths(m, n, 0, 0);
};

const generatePaths = (m, n, r, c) => {
  if (r === m - 1 && c === n - 1) return 1;
  let sum = 0;
  if (r < m) {
    sum += generatePaths(m, n, r + 1, c);
  }
  if (c < n) {
    sum += generatePaths(m, n, r, c + 1);
  }
  return sum;
};

console.log(uniquePaths(3, 7))