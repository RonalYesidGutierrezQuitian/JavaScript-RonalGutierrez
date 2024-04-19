const N = 8;

// function to check if it is safe to place a queen at a particular position
function isSafe(board, row, col) {
// check if there is a queen in the same row to the left
for (let x = 0; x < col; x++) {
	if (board[row][x] == 1) {
	return false;
	}
}

// check if there is a queen in the upper left diagonal
for (let x = row, y = col; x >= 0 && y >= 0; x--, y--) {
	if (board[x][y] == 1) {
	return false;
	}
}

// check if there is a queen in the lower left diagonal
for (let x = row, y = col; x < N && y >= 0; x++, y--) {
	if (board[x][y] == 1) {
	return false;
	}
}

// if there is no queen in any of the above positions, then it is safe to place a queen
return true;
}

// function to solve the N-queens problem using backtracking
function solveNQueens(board, col) {
// if all queens are placed, print the board
if (col == N) {
	for (let i = 0; i < N; i++) {
	console.log(board[i].join(" "));
	}
	console.log("\n");
	return true;
}

// try placing a queen in each row of the current column
for (let i = 0; i < N; i++) {
	if (isSafe(board, i, col)) {
	board[i][col] = 1; // place the queen
	if (solveNQueens(board, col + 1)) {
		return true;
	}
	board[i][col] = 0; // backtrack if placing the queen doesn't lead to a solution
	}
}

// if no solution is found, return false
return false;
}

// initialize the board with zeros and call the solveNQueens function to solve the problem
let board = Array(N)
.fill()
.map(() => Array(N).fill(0));

if (!solveNQueens(board, 0)) {
console.log("No solution found");
}
