/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length < 1) return -1;
  if (nums.length < 2) {
    return nums[0] === target ? 0 : -1;
  }
  let l = 0;
  let r = nums.length - 1;
  let pivot = 0;
  while (nums[l] > nums[r] && l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] > nums[mid + 1]) {
      pivot = mid + 1;
      break;
    } else if (nums[mid] < nums[l]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  l = 0, r = nums.length - 1;
  if (target < nums[0]) {
    l = pivot;
  } else {
    r = pivot;
  }
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 8, 9, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([1, 3], 0));
console.log(search([1, 3], 3));