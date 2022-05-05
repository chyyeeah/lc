/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
  const store = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (store.has(num)) return true;
    store.add(num);
  }
  return false;
};

containsDuplicate = function (nums) {
  const store = new Set(nums);
  return store.size < nums.length;
};