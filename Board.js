class BoardGame {
    width;
    height;
    elementId;
    turn;
    isEndGame;
    cells;

    constructor(width, height, elementId) {
        this.width = width;
        this.height = height;
        this.elementId = elementId;
        this.turn = value_O;
        this.isEndGame = false;
        this.cells = [];
    }

    drawBoard() {
        let gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for (let i = 0; i < this.height; i++) {
            let row = [];
            this.cells.push(row);
            for (let j = 0; j < this.width; j++) {
                let cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.drawCell();
            }
        }
    }

    play(x, y) {
        if (this.isEndGame) {
            return;
        }
        let cell = this.cells[x][y];
        if (cell.value === empty_Value) {
            cell.value = this.turn;
            cell.drawValue();
            this.check(x, y, cell.value);
            if (this.turn === value_O) {
                this.turn = value_X;
            } else {
                this.turn = value_O;
                document.getElementById("cell-" + x + "-" + y).style.color = "blue"
            }
            document.getElementById("cell-" + x + "-" + y).style.cursor = "no-drop"
        } else {
            alert("Cell is not empty");
        }
    }

    check(x, y, value) {
        let checkEnd = this.isEndOnRow(x, y, value) || this.isEndOnColumn(x, y, value)
            || this.isEndOnPrimary(x, y, value) || this.isEndOnSub(x, y, value);
        if (checkEnd) {
            this.isEndGame = true;
            alert("You Win");
        }
    }

    isEndOnRow(x, y, str) {
        let count = 0;
        let width = Math.floor(boardGameWidth / 2);
        for (let k = -width; k <= width; k++) {
            if (y + k > 0 && y + k < this.height) {
                if (this.cells[x][y + k].value === str) {
                    count++;
                } else if (count < 5) {
                    count = 0;
                }
            }
        }
        return count === 5;
    }

    isEndOnColumn(x, y, str) {
        let count = 0;
        let height = Math.floor(boardGameHeight / 2);
        for (let k = -height; k <= height; k++) {
            if (x + k > 0 && x + k < this.width) {
                if (this.cells[x + k][y].value === str) {
                    count++;
                } else if (count < 5) {
                    count = 0;
                }
            }
        }
        return count === 5;
    }

    checkCount(y, k, x, str, count) {
        if (y + k >= 0 && y + k < this.height && x + k >= 0 && x + k < this.width) {
            if (this.cells[x + k][y + k].value === str) {
                count++;
            } else if (count < 5) {
                count = 0;
            }
        }
        return count;
    }

    isEndOnPrimary(x, y, str) {
        let count = 0;
        let height = Math.floor(boardGameHeight / 2) - 1;
        for (let k = -height; k <= height; k++) {
            count = this.checkCount(y, k, x, str, count);
        }
        return count === 5;
    }

    isEndOnSub(x, y, str) {
        let count = 0;
        let height = Math.floor(boardGameHeight / 2) - 1;
        for (let k = -height, j = 5; k <= height, j >= -height; k++, j--) {
            count = this.checkCount(y, k, x, str, count);
        }
        return count === 5;
    }
}