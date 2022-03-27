const pair_with_targetsum_with_binary_search = function (arr, target_sum) {
  for (let left = 0; left < arr.length; left++) {
    const leftVal = arr[left];
    let start = left + 1;
    let end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor(start + ((end - start) / 2));
      const midVal = arr[mid];
      const sum = leftVal + midVal;
      if (sum === target_sum) return [left, mid];
      if (sum < target_sum) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return [-1, -1];
}

console.log(pair_with_targetsum_with_binary_search([1, 2, 3, 4, 6], 6));
console.log(pair_with_targetsum_with_binary_search([2, 5, 9, 11], 11));

const pair_with_targetsum = function (arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target_sum) return [left, right];
    if (sum < target_sum) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6));
console.log(pair_with_targetsum([2, 5, 9, 11], 11));