const find_corrupt_numbers = function(nums) {
  let i = 0;
  while (i < nums.length) {
    const num = nums[i];
    if (nums[num - 1] !== num) {
      nums[i] = nums[num - 1];
      nums[num - 1] = num;
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i + 1 !== num) {
      return [num, i + 1];
    }
  }
  return [-1, -1];
};

console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));