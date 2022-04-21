const find_range = function (arr, key) {
  const result = [- 1, -1];
  result[0] = findKey(arr, key, true);
  if (result[0] !== -1) {
    result[1] = findKey(arr, key, false);
  }
  return result;
};

const findKey = (arr, key, isLookingForStart) => {
  let result = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const val = arr[mid];
    if (key < val) {
      end = mid - 1;
    } else if (key > val) {
      start = mid + 1;
    } else {
      result = mid;
      if (isLookingForStart) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return result;
};

console.log(find_range([4, 6, 6, 6, 9], 6))
console.log(find_range([1, 3, 8, 10, 15], 10))
console.log(find_range([1, 3, 8, 10, 15], 12))
