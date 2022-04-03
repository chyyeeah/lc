const search_ceiling_of_a_number = function(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === key) return mid;
    if (key < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left >= arr.length ? -1 : left;
};


console.log(search_ceiling_of_a_number([4, 6, 10], 6))
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
console.log(search_ceiling_of_a_number([4, 6, 10], 17))
console.log(search_ceiling_of_a_number([4, 6, 10], -1))
