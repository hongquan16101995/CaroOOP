const cellSize = 40;
const empty_Value = 1;
const value_X = 2;
const value_O = 3;
const boardGameWidth = 10;
const boardGameHeight = 10;
let gameBoard;

function play(x, y) {
    gameBoard.play(x, y);
}

function start() {
    gameBoard = new BoardGame(boardGameHeight, boardGameWidth, "boardGame");
    gameBoard.drawBoard();
}

start();

function check() {

}
window.addEventListener("mouseover", check)