const find_subsets = function (nums) {
  const subsets = [[]];
  nums.sort((a, b) => a - b);
  let lastEndingIndex = 1;
  for (let i = 0; i < nums.length; i++) {
    let idx = 0;
    const length = subsets.length;
    const num = nums[i];
    const prev = nums[i - 1];
    if (num === prev) {
      idx = lastEndingIndex;
    }
    while (idx < length) {
      subsets.push(subsets[idx].concat(num));
      idx++;
    }
    lastEndingIndex = length;
  }
  return subsets;
};

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

/*
[1, 3, 3, 5]
[]
[] [1]
[] [1] [3] [1, 3]
[] [1] [3] [1, 3] [3, 3] [1, 3, 3]

*/