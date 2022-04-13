/**Brute Force */
let solveKnapsack = function (profits, weights, capacity) {
  const recurse = (idx, capacity) => {
    if (capacity <= 0 || idx >= weights.length) return 0;
    let profit1 = 0;
    if (weights[idx] <= capacity) {
      profit1 = profits[idx] + recurse(idx + 1, capacity - weights[idx]);
    }
    const profit2 = recurse(idx + 1, capacity);
    return Math.max(profit1, profit2);
  };
  return recurse(0, capacity);
};

/**Top down - memoization */
solveKnapsack = function (profits, weights, capacity) {
  const dp = new Array(weights.length).fill(0).map(() => ({}));
  const recurse = (idx, capacity) => {
    if (capacity <= 0 || idx >= weights.length) return 0;
    if (dp[idx][capacity] != null) return dp[idx][capacity];
    let profit1 = 0;
    if (weights[idx] <= capacity) {
      profit1 = profits[idx] + recurse(idx + 1, capacity - weights[idx]);
    }
    const profit2 = recurse(idx + 1, capacity);
    const result = Math.max(profit1, profit2);
    dp[idx][capacity] = result;
    return result;
  };
  return recurse(0, capacity);
};

/**Bottom up - tabulation */
solveKnapsack = function (profits, weights, capacity) {
  const dp = new Array(weights.length).fill(0).map(() => new Array(capacity + 1).fill(0));
  // console.log(dp);

  for (let i = 0; i < weights.length; i++) {
    for (let j = 1; j < capacity + 1; j++) {
      
      let currentCapacity = j;
      let sum = 0;
      if (weights[i] <= currentCapacity) {
        currentCapacity -= weights[i];
        sum += profits[i];
      }
      if (i > 0) {
        sum += dp[i - 1][currentCapacity];
      }
      dp[i][j] = sum;
    }
  }
  return dp[weights.length - 1][capacity];
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);