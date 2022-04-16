/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let freshOranges = 0;
  let numOranges = 0;
  const sources = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const orange = grid[row][col];
      if (orange === 0) continue;
      if (orange === 2) sources.push([row, col]);
      if (orange === 1) freshOranges++;
      numOranges++;
    }
  }
  if (sources.length < 1) {
    return freshOranges > 0 ? -1 : 0;
  }
  let seconds = -1;
  while (sources.length > 0) {
    let length = sources.length;
    while (length > 0) {
      length--;
      const coordinate = sources.shift();
      numOranges--;
      spreadRot(sources, grid, coordinate);
    }
    seconds++;
  }
  return numOranges === 0 ? seconds : -1;
};

const spreadRot = (arr, grid, coordinate) => {
  const [y, x] = coordinate;
  if (y > 0 && grid[y - 1][x] === 1) {
    grid[y - 1][x] = 2;
    arr.push([y - 1, x]);
  }
  if (y < grid.length - 1 && grid[y + 1][x] === 1) {
    grid[y + 1][x] = 2;
    arr.push([y + 1, x]);
  }
  if (x > 0 && grid[y][x - 1] === 1) {
    grid[y][x - 1] = 2;
    arr.push([y, x - 1]);
  }
  if (x < grid[0].length - 1 && grid[y][x + 1] === 1) {
    grid[y][x + 1] = 2;
    arr.push([y, x + 1]);
  }
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));