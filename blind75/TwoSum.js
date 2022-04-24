/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (hash[diff] != null) {
      return [hash[diff], i];
    }
    hash[num] = i;
  }
};
console.log(twoSum([3,2,4], 6));