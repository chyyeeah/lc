const find_missing_numbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while ((i + 1) !== nums[i]) {
      const temp = nums[i];
      if (temp === nums[temp - 1]) break;
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if ((i + 1) !== nums[i]) result.push(i + 1);
  }
  return result;
};

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers([2, 4, 1, 2]));
console.log(find_missing_numbers([2, 3, 2, 1]));