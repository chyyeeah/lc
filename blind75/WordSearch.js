/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let result = false;
  const explore = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(false));
  const backtrack = (r, c, idx) => {
    if (explore[r][c]) return false;
    if (idx >= word.length) {
      return true;
    }
    explore[r][c] = true;
    const char = word[idx];
    let res = false;
    if (r > 0 && board[r - 1][c] === char) {
      res = res || backtrack(r - 1, c, idx + 1);
    }
    if (!res && c > 0 && board[r][c - 1] && board[r][c - 1] === char) {
      res = res || backtrack(r, c - 1, idx + 1);
    }
    if (!res && r < board.length - 1 && board[r + 1][c] === char) {
      res = res || backtrack(r + 1, c, idx + 1);
    }
    if (!res && c < board[0].length - 1 && board[r][c + 1] === char) {
      res = res || backtrack(r, c + 1, idx + 1);
    }
    explore[r][c] = false;
    return res;
  };
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (word[0] === board[row][col]) {
        result = result || backtrack(row, col, 1);
      }
      if (result) return true;
    }
  }
  return result;
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED'));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'SEE'));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCB'));