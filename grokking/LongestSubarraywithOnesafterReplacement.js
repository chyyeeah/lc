const length_of_longest_substring = function (arr, k) {
  let result = 0;
  let onesCounter = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    const num = arr[right];
    if (num === 1) onesCounter++;
    if ((right - left + 1) > (onesCounter + k)) {
      const leftNum = arr[left];
      if (leftNum === 1) onesCounter--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));