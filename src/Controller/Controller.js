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
import TicTacToeBoard from './../Model/TicTacToeBoard';

/**
 * The Controller of the game.
 * Controlls what actions are done after a click and changes the game state.
 */
class Controller {
    /**
     * The constructor of the controller.
     * 
     * @param {*} view The view on which the game is displayed.
     */
    constructor(view) {
        this.ticTacToeBoard = new TicTacToeBoard();
        this.model = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
        this.view = view;
    }

    /**
     * The reaction to a click on a square.
     * 
     * @param {*} i The index of the clicked square.
     */
    handleClick(i) {
        var x = i % 3;
        var y = Math.floor(i / 3);

        const squares = this.ticTacToeBoard.toArray();
        const winner = this.calculateWinner();

        if (winner || squares[i]) {
            return;
        }
        this.ticTacToeBoard.placeMarker(x, y);
        this.view.updateView(winner, this.ticTacToeBoard.xIsNext, this.ticTacToeBoard.getStep(), this.ticTacToeBoard.toArray());
    }

    /**
     * Jumps back to a previous state of the game (called the 'move').
     * 
     * @param {*} step The index of the move to jump back to.
     */
    jumpToMove(step) {
        this.ticTacToeBoard.rememberMove(step);
        this.view.updateView(null, this.ticTacToeBoard.xIsNext, this.ticTacToeBoard.getStep(), this.ticTacToeBoard.toArray());
    }

    /**
     * Calculates if any player has won yet.
     * Returns 'X','O' or null if no game is still in progress.
     */
    calculateWinner() {
        let squares = this.ticTacToeBoard.toArray();
        const lines = [
            [
                0, 1, 2
            ],
            [
                3, 4, 5
            ],
            [
                6, 7, 8
            ],
            [
                0, 3, 6
            ],
            [
                1, 4, 7
            ],
            [
                2, 5, 8
            ],
            [
                0, 4, 8
            ],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a,
                b,
                c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}

export default Controller;