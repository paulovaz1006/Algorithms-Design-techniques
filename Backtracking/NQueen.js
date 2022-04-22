function saveTheQueens(board, col, n) {
  if( col >= n )
    return true

  for(let row = 0; row < n; row++) {
    if(isSafe(board, row, col, n)) {
      board[row][col] = 1;

      if(saveTheQueens(board, col + 1, n))
        return true;

        board[row][col] = 0;
    }
  }

  return false;
}

function isSafe(board, row, col, n) {
  let i, j;
  for(let i = 0; i < col; i++) {
    if(board[row][i]) 
    return false;
  }

  for(i = row, j = col; i>= 0 && j >= 0; i--, j--) {
    if(board[i][j] === 1) {
      return false;
    }
  }

  for(i = row, j = col; i < n && j >= 0; i++, j--) {
    if (board[i][j] === 1) 
      return false;
  }

  return true;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

const n = board.length;
if(saveTheQueens(board, 0, n))
  console.log(board)
else
  console.log("No Solution")