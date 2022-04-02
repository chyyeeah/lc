const binary_search = function(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  const isAsc = arr[right] > arr[left];
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === key) return mid;
    if (key < arr[mid]) {
      if (isAsc) {
        right = mid - 1; 
      } else {
        left = mid + 1;
      }
    } else {
      if (isAsc) {
        left = mid + 1;
      } else {
        right = mid - 1; 
      }
    }
  }
};

console.log(binary_search([4, 6, 10], 10))
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
console.log(binary_search([10, 6, 4], 10))
console.log(binary_search([10, 6, 4], 4))
