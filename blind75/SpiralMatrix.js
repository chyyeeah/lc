/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];
  let rows = matrix.length;
  let cols = matrix[0].length
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;
  while (result.length < rows * cols) {
    for (let i = left; i < right + 1; i++) {
      result.push(matrix[top][i]);
    }
    for (let i = top + 1; i < bottom; i++) {
      result.push(matrix[i][right]);
    }
    if (top < bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
    }
    if (left < right) {
      for (let i = bottom - 1; i > top; i--) {
        result.push(matrix[i][left]);
      }
    }
    top++;
    right--;
    bottom--;
    left++;
  }
  return result;
};

console.log(spiralOrder(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
));
console.log(spiralOrder(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ]
));
console.log(spiralOrder(
  [
    [5, 6, 7, 8],
  ]
));
console.log(spiralOrder(
  [
    [5]
  ]
));
console.log(spiralOrder(
  [
    [1], 
    [2], 
    [3], 
    [4], 
    [5], 
    [6], 
    [7], 
    [8], 
    [9], 
    [10]
  ]
))