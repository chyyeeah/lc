const triplet_sum_close_to_target = function (arr, target_sum) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  let minSum;

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = target_sum - sum;
      if (diff === 0) return sum;
      const absDiff = Math.abs(diff);
      if (absDiff === minDiff) {
        minSum = Math.min(minSum, sum);
      }
      if (absDiff < minDiff) {
        minDiff = absDiff;
        minSum = sum;
      }
      if (sum < target_sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return minSum;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));