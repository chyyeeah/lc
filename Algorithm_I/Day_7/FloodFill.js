/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image;
    const color = image[sr][sc];
    const recurse = (r, c) => {
        console.log(r, c);
        if (image[r][c] === color) {
            image[r][c] = newColor;
        }
        if (r > 0 && image[r - 1][c] === color) {
            recurse(r - 1, c);
        }
        if ((c < image[0].length - 1) && image[r][c + 1] === color) {
            recurse(r, c + 1);
        }
        if ((r < image.length - 1) && image[r + 1][c] === color) {
            recurse(r + 1, c);
        }
        if (c > 0 && image[r][c - 1] === color) {
            recurse(r, c - 1);
        }
    };
    recurse(sr, sc);
    return image;
};

let image = [[1,1,1],[1,1,0],[1,0,1]];
// floodFill(image, 1, 1, 2);
// console.log(image);
image = [
    [0,0,0],
    [0,1,1]
];
floodFill(image, 1, 1, 1);
console.log(image);
