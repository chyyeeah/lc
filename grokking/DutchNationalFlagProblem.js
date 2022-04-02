let dutch_flag_sort = function (arr) {
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      const temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      left++;
    }
  }
  for (let right = left; right < arr.length; right++) {
    if (arr[right] === 1) {
      const temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      left++;
    }
  }
  return arr;
};

dutch_flag_sort = function (arr) {
  let idx = 0;
  let left = 0;
  let right = arr.length - 1;
  while (idx <= right) {
    if (arr[idx] === 0) {
      const temp = arr[idx];
      arr[idx] = arr[left];
      arr[left] = temp;
      idx++;
      left++;
    } else if (arr[idx] === 1) {
      idx++;
    } else {
      const temp = arr[idx];
      arr[idx] = arr[right];
      arr[right] = temp;
      right--;
    }
  }
  return arr;
};

console.log(dutch_flag_sort([1, 0, 2, 1, 0]));
console.log(dutch_flag_sort([2, 2, 0, 1, 2, 0]));