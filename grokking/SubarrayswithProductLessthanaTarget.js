const find_subarrays = function (arr, target) {
  const result = [];
  let product = 1;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while (product >= target && left < arr.length) {
      product /= arr[left];
      left++;
    }
    const tempList = [];
    // for (let i = left; i < right + 1; i++) {
    //   tempList.push(arr[i]);
    //   result.push(tempList.slice());
    // }
    console.log(1, result);
    for (let i = right; i > left - 1; i--) {
      tempList.push(arr[i]);
      result.push(tempList.slice());
    }
    console.log(2, result);
    /**
     * The reason we go from right to left is to prevent
     * duplicates. This way we also capture the right-most
     * value on its own.
     * Ex. Left to Right. [2,5,3,10], target=30
     *  -> [ [ 2 ], [ 2 ], [ 2, 5 ], [ 5 ], [ 5, 3 ], [ 10 ] ]
     * Ex. Right to Left. [2,5,3,10], target=30
     *  -> [ [ 2 ], [ 5 ], [ 5, 2 ], [ 3 ], [ 3, 5 ], [ 10 ] ]
     */
  }
  return result;
};

console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));