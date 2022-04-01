const find_subsets = function(nums) {
  const subsets = [[]];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const length = subsets.length;
    let idx = 0;
    while (idx < length) {
      subsets.push(subsets[idx].concat(num));
      idx++;
    }
  }
  return subsets;
};


console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});
