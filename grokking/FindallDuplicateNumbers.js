const find_all_duplicates = function(nums) {
  const duplicateNumbers = [];
  for (let i = 0; i < nums.length; i++) {
    while ((i + 1) !== nums[i]) {
      const temp = nums[i];
      if (temp === nums[temp - 1]) {
        duplicateNumbers.push(temp);
        break;
      }
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }
  return duplicateNumbers;
};

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));
/*
[3, 4, 4, 5, 5]
[4, 4, 3, 5, 5]
[5, 4, 3, 4, 5]
[5, 4, 3, 4, 5]
*/