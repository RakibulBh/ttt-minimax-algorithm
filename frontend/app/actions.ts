"use server";

// This function uses the minimax algorithm to determine the best move for the computer player.
export const getBestMove = async ({ board }: { board: string[][] }) => {
  const moves = getAvailableMoves(board);
  const depth = 9 - moves.length;
  let bestScore = -Infinity;
  let bestMove: [number, number] = [-1, -1];

  for (let move of moves) {
    const [r, c] = move;
    board[r][c] = "O";
    const score = minimax(board, depth, false);
    board[r][c] = ".";

    if (score > bestScore) {
      bestScore = score;
      bestMove = [r, c];
    }
  }

  return bestMove;
};

// This is the core of the minimax algorithm. It recursively evaluates all possible moves and determines the best move for the computer player.
const minimax = (
  board: string[][],
  depth: number,
  isMaximizingPlayer: boolean
): number => {
  // Base case: If depth is 0 or the game is over, evaluate the board
  if (
    depth === 0 ||
    isWinning(board, "X") ||
    isWinning(board, "O") ||
    isTie(board)
  ) {
    return evaluate(board);
  }

  const player = isMaximizingPlayer ? "O" : "X";
  const moves = getAvailableMoves(board);

  if (isMaximizingPlayer) {
    let maxScore = -Infinity;
    for (let move of moves) {
      const [r, c] = move;
      board[r][c] = player;
      const score = minimax(board, depth - 1, false);
      board[r][c] = ".";
      maxScore = Math.max(maxScore, score);
    }
    return maxScore;
  } else {
    let minScore = Infinity;
    for (let move of moves) {
      const [r, c] = move;
      board[r][c] = player;
      const score = minimax(board, depth - 1, true);
      board[r][c] = ".";
      minScore = Math.min(minScore, score);
    }
    return minScore;
  }
};

//This function returns a list of all the available (empty) cells on the current game board.
const getAvailableMoves = (board: string[][]) => {
  const moves = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === ".") {
        moves.push([r, c]);
      }
    }
  }
  return moves;
};

//This function evaluates the current state of the game board and assigns a score to it based on the game's outcome.
const evaluate = (board: string[][]) => {
  if (isWinning(board, "X")) {
    return -1;
  } else if (isWinning(board, "O")) {
    return 1;
  } else {
    return 0;
  }
};

// This function checks if the given player has won the game on the current board.
const isWinning = (board: string[][], player: string) => {
  // Check rows
  for (let r = 0; r < board.length; r++) {
    if (
      board[r][0] === player &&
      board[r][1] === player &&
      board[r][2] === player
    ) {
      return true;
    }
  }

  // Check columns
  for (let c = 0; c < board[0].length; c++) {
    if (
      board[0][c] === player &&
      board[1][c] === player &&
      board[2][c] === player
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  }

  return false;
};

// This function checks if the current game board represents a tie (i.e., no more moves can be made).
const isTie = (board: string[][]) => {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === ".") {
        return false;
      }
    }
  }
  return !isWinning(board, "X") && !isWinning(board, "O");
};
