/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length < 2) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] < nums[right]) return nums[0];
  while (left <= right) {
    console.log(left, right);
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[mid] < nums[left]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  console.log('outside', left, right);
};

// console.log(findMin([3, 4, 5, 1, 2]));
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMin([11, 13, 15, 17]));
// console.log(findMin([1]));
console.log(findMin([2, 1]));
console.log(findMin([3, 1, 2]));