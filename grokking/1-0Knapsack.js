const solveKnapsack = function (profits, weights, capacity) {
  const recurse = (idx, capacity) => {
    if (capacity <= 0 || idx >= weights.length) return 0;
    let profit1 = 0;
    const p1Size = weights[idx];
    if (p1Size <= capacity) {
      profit1 = profits[idx] + recurse(idx + 1, capacity - p1Size);
    }
    const profit2 = recurse(idx + 1, capacity);
    return Math.max(profit1, profit2);
  };
  return recurse(0, capacity);
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);