const make_squares = function(arr) {
  const squares = []
  let pointer = arr.length - 1;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const leftVal = Math.pow(arr[left], 2);
    const rightVal = Math.pow(arr[right], 2);
    if (leftVal < rightVal) {
      squares[pointer] = rightVal;
      right--;
    } else {
      squares[pointer] = leftVal;
      left++;
    }
    pointer--;
  }
  return squares;
};

console.log(make_squares([-2, -1, 0, 2, 3]));
console.log(make_squares([-3, -1, 0, 1, 2]));