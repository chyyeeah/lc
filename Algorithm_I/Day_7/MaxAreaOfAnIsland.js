const surveyIsland = (grid, r, c) => {
    let counter = 0;
    counter++;
    grid[r][c] = 2;
    if (r > 0 && grid[r - 1][c] === 1) {
        counter += surveyIsland(grid, r - 1, c);
    }
    if ((c < grid[r].length - 1) && grid[r][c + 1] === 1) {
        counter += surveyIsland(grid, r, c + 1);
    }
    if ((r < grid.length - 1) && grid[r + 1][c] === 1) {
        counter += surveyIsland(grid, r + 1, c);
    }
    if (c > 0 && grid[r][c - 1] === 1) {
        counter += surveyIsland(grid, r, c - 1);
    }
    console.log(counter);
    return counter;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let max = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                max = Math.max(max, surveyIsland(grid, row, col));
            }
        }
    }

    return max;
};

let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
console.log(maxAreaOfIsland(grid));