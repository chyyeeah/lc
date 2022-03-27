const remove_duplicates = function(arr) {
  let result = 0;
  for (let left = 0; left < arr.length; left++) {
    result++;
    let right = left + 1;
    while (arr[right] === arr[left]) {
      right++;
      left++;
    }
  }
  return result;
};

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));