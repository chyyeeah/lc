const find_duplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while ((i + 1) !== nums[i]) {
      const temp = nums[i];
      if (temp === nums[temp - 1]) return temp;
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }
  return -1;
};

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));