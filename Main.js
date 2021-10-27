const cellSize = 40;
const empty_Value = 1;
const value_X = 2;
const value_O = 3;
const boardGameWidth = 15;
const boardGameHeight = 15;
let gameBoard;

function play(x, y) {
    gameBoard.play(x, y);
}

function start() {
    gameBoard = new BoardGame(boardGameWidth, boardGameHeight, "boardGame");
    gameBoard.drawBoard();
}

start();