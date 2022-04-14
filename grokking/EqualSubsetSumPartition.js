const can_partition = function(nums) {
  const sum = nums.reduce((acc, num) => acc += num, 0);
  if (sum % 2 !== 0) return false;
  const recurse = (sum, idx) => {
    if (sum === 0) return true;
    if (idx >= nums.length) return false;
    const num = nums[idx];
    if (num <= sum) {
      if (recurse(sum - num, idx + 1)) return true;
    }
    return recurse(sum, idx + 1);
  };
  return recurse(sum / 2, 0);
};

console.log(`Can partition: ${can_partition([1, 2, 3, 4])}`)
console.log(`Can partition: ${can_partition([1, 1, 3, 4, 7])}`)
console.log(`Can partition: ${can_partition([2, 3, 4, 6])}`)
