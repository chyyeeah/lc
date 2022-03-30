const find_missing_number = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (i !== nums[i]) {
      if (nums[i] === nums.length) {
        break;
      }
      const temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) return j;
  }
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));