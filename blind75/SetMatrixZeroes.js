/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const sources = [];
  matrix.forEach((r, rIdx) => {
    r.forEach((node, cIdx) => {
      if (node === 0) sources.push([rIdx, cIdx]);
    });
  });
  while (sources.length > 0) {
    const [x, y] = sources.pop();
    let tempX = x;
    let tempY = y;
    while (tempX > 0) {
      matrix[tempX - 1][y] = 0;
      tempX--;
    }
    while (tempY > 0) {
      matrix[x][tempY - 1] = 0;
      tempY--;
    }
    tempX = x;
    while (tempX < matrix.length - 1) {
      matrix[tempX + 1][y] = 0;
      tempX++;
    }
    tempY = y;
    while (tempY < matrix[0].length - 1) {
      matrix[x][tempY + 1] = 0;
      tempY++;
    }
  }
};

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix);
console.log(matrix);
matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(matrix);
console.log(matrix);
matrix = [
  [0, 0, 0, 5],
  [4, 3, 1, 4],
  [0, 1, 1, 4],
  [1, 2, 1, 3],
  [0, 0, 1, 1]];
setZeroes(matrix);
console.log(matrix);