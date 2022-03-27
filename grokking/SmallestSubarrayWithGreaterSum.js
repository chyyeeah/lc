const smallest_subarray_with_given_sum = function (s, arr) {
  if (arr.length < 1) return 0;
  let result = Infinity;
  let tracker = 0;
  let sum = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    tracker++;
    while (sum >= s) {
      result = Math.min(result, tracker);
      sum -= arr[left];
      left++;
      tracker--;
    }
  }
  return result;
};

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]));
console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]));
console.log(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]));