/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = nums[0];
  let minSoFar = nums[0];
  let maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const tempMin = minSoFar;
    const tempMax = maxSoFar;
    minSoFar = Math.min(num, tempMin * num, tempMax * num);
    maxSoFar = Math.max(num, tempMin * num, tempMax * num);
    result = Math.max(result, maxSoFar);
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));