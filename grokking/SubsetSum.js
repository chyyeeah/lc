/**Top down */
const canPartition = function (nums, sum) {
  const dp = {};
  const recurse = (idx, remaining) => {
    if (dp[remaining] != null && dp[remaining][idx] != null) {
      return dp[remaining][idx];
    }
    if (remaining === 0) return true;
    if (idx >= nums.length || remaining < 0) return false;
    const nextNum = nums[idx + 1];
    if (dp[remaining] == null) dp[remaining] = {};
    dp[remaining][idx] = recurse(idx + 1, remaining - nextNum) || recurse(idx + 1, remaining);
    return dp[remaining][idx];
  };
  return recurse(0, sum - nums[0]) || recurse(0, sum);
};

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
