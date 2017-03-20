/**
 * TicTacToe
 *
 * Development of a familiar and easy game as a console based application.
 *
 * A simple Test project to expierience JavaScript Developement with an IDE.
 * NodeJS, ECMAScript, React and Jest
 *
 * @author Kim Fehrs
 */

/**
 * The board on which the game TicTacToe is played.
 *
 * Holds the status of the board and offers functionality to change it.
 */
class TicTacToeBoard {

    /**
     * The constructor of the board
     */
    constructor() {
        this.step = 0;
        this.boardsize = 3;
        this.xIsNext = true;
        this.moveList = [];
        this.board = Array(3).fill('');
        for (var i = 0; i < this.boardsize; i++) {
            this.board[i] = Array(3).fill('');
        }
        this.clearBoard();
    }

    /**
     * Function to clear the board and start a new game.
     */
    clearBoard() {
        for (var i = 0; i < this.boardsize; i++) {
            for (var j = 0; j < this.boardsize; j++) {
                this.board[i][j] = ' ';
            }
        }
        this.moveList = [];
        this.saveCurrentState();
        this.step = 0;
    }

    /**
     * Places a circle at position x,y
     */
    placeCircle(x, y) {
        this.board[x][y] = 'O';
    }

    /**
     * Places a cross at position x,y
     */
    placeCross(x, y) {
        this.board[x][y] = 'X';
    }

    /**
     * Places the next marker at position x,y
     */
    placeMarker(x, y) {
        if (this.at(x, y) !== ' ') {
            return
        }

        if (this.xIsNext) {
            this.placeCross(x, y);
        } else {
            this.placeCircle(x, y);
        }

        this.step++;
        this.saveCurrentState();
        this.xIsNext = !this.xIsNext;
    }

    /**
     * Saves the current state of the game.
     */
    saveCurrentState() {
        var newState = this.board.map(function (arr) {
            return arr.slice();
        });
        this.moveList.push(newState);
    }

    /**
    * Remebers a previous state of the game and goes back to it.
    * 
    * @param {*} move The id of the previous move.
    */
    rememberMove(move) {
        this.moveList = this.moveList.slice(0, move + 1);
        this.board = this.moveList[move];
        this.step = move;
        this.xIsNext = (move % 2)
            ? false
            : true;
    }

    /**
     * Returns what is on the board at the given position
     */
    at(x, y) {
        return this.board[x][y];
    }
    /**
     * Returns the current step
     */
    getStep() {
        return this.step;
    }

    /**
     * Expresses the status of the board as a string. Looks as follows:
     *
     * |X| ----- X| | ----- | |O
     */
    toString() {
        var string = '';
        for (var y = 0; y < this.boardsize; y++) {
            for (var x = 0; x < this.boardsize; x++) {
                string += this.board[x][y];
                if (x < this.boardsize - 1) {
                    string += '|'
                }
            }
            string += '\n';
            if (y < this.boardsize - 1) {
                for (var z = 0; z < this.boardsize; z++) {
                    string += '-';
                    if (z < this.boardsize - 1) {
                        string += '-'
                    }
                }
                string += '\n';
            }
        }
        return string;
    }

    /**
     * Converts the board state into a single dimensional array
     */
    toArray() {
        var arr = Array(9).fill(null);
        for (var i = 0; i < this.boardsize; i++) {
            for (var j = 0; j < this.boardsize; j++) {
                var marker = this.at(i, j);
                if (marker !== ' ')
                    arr[(j * this.boardsize) + i] = marker;
            }
        }
        return arr;
    }
}

export default TicTacToeBoard;
