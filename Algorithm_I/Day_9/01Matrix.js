const checkUp = (m, r, c) => {
    let counter = 1;
    if (m[r] == null || m[r][c] == null) return null;
    if (m[r][c] === 1) {
        const result = checkUp(m, r - 1, c);
        if (result == null) {
            return null;
        }
        counter += result;
    }
    console.log(r, c, counter);
    return counter;
};
const checkRight = (m, r, c) => {
    let counter = 0;
    if (m[r] == null || m[r][c] == null) return null;
    if ((c < m[r].length) && m[r][c]) {
        const result = checkUp(m, r, c + 1);
        if (result == null) {
            return null;
        }
        counter += result;
    } else {
        counter++;
    }
    return counter;
};
const checkDown = (m, r, c) => {
    let counter = 0;
    if (m[r] == null || m[r][c] == null) return null;
    if ((r < m.length) && m[r][c]) {
        const result = checkUp(m, r + 1, c);
        if (result == null) {
            return null;
        }
        counter += result;
    } else {
        counter++;
    }
    return counter;
};
const checkLeft = (m, r, c) => {
    let counter = 0;
    if (m[r] == null || m[r][c] == null) return null;
    if ((c >= 0) && m[r][c]) {
        const result = checkUp(m, r, c - 1);
        if (result == null) {
            return null;
        }
        counter += result;
    } else {
        counter++;
    }
    return counter;
};

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            if (mat[row][col] === 1) {
                mat[row][col] = Math.min(
                    mat[row][col],
                    checkUp(mat, row - 1, col) ?? 1,
                    checkRight(mat, row, col + 1) ?? 1,
                    checkDown(mat, row + 1, col) ?? 1,
                    checkLeft(mat, row, col - 1) ?? 1,
                )
            }
        }
    }
    return mat;
};

let matrix = [[0,0,0],[0,1,0],[0,1,0]];
// let matrix = [[0,0,0],[0,1,0],[1,1,1]];
console.log(updateMatrix(matrix));