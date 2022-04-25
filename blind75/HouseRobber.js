/**Brute force
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//   if (nums.length < 1) return 0;
//   if (nums.length < 2) return nums[0];
//   if (nums.length < 3) return Math.max(nums[0], nums[1]);
//   const backtrack = (idx, tracker) => {
//     let max = tracker;
//     for (let i = idx + 2; i < nums.length; i++) {
//       max = Math.max(max, backtrack(i, tracker + nums[i]));
//     }
//     return max;
//   };
//   return Math.max(backtrack(0, nums[0]), backtrack(1, nums[1]));
// };

/**Updated Brute force from solution
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//   const backtrack = (idx) => {
//     if (idx >= nums.length) return 0;
//     const max = Math.max(
//       backtrack(idx + 1),
//       backtrack(idx + 2) + nums[idx]
//     )
//     return max;
//   };
//   return backtrack(0);
// };

/**Top down 
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = new Array(nums.length).fill(null);
  const backtrack = (idx) => {
    if (dp[idx] != null) return dp[idx];
    if (idx >= nums.length) return 0;
    const max = Math.max(
      backtrack(idx + 1),
      backtrack(idx + 2) + nums[idx]
    )
    dp[idx] = max;
    return dp[idx];
  };
  return backtrack(0);
};

// console.log(rob([1, 2, 3, 1]))
// console.log(rob([2, 7, 9, 3, 1]))
// console.log(rob([2, 7,1, 9, 3, 1]))
// console.log(rob([1, 2]))
console.log(rob([114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240]));