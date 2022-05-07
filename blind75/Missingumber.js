/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      const num = nums[i];
      if (num >= nums.length) break;
      nums[i] = nums[num];
      nums[num] = num;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) return i;
  }
  return nums.length;
};