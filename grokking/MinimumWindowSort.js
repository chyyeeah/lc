const shortest_window_sort = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < arr.length - 1) {
    const current = arr[left];
    const next = arr[left + 1];
    if (current > next) break;
    left++;
  }
  if (left >= arr.length) return 0;
  while (right > left) {
    const current = arr[right];
    const next = arr[right - 1];
    if (current < next) break;
    right--;
  }
  let min = Infinity;
  let max = -Infinity;
  for (let i = left; i < right + 1; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  console.log(min, max);
  while (arr[left - 1] > min && left > 0) left--;
  while (arr[right + 1] < max && right < arr.length - 1) right++;
  return right - left + 1;
};

// console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
// console.log(shortest_window_sort([1, 2, 3]));
// console.log(shortest_window_sort([3, 2, 1]));