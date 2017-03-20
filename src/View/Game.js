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

import React from 'react';
import Board from './Board';
import Controller from '../Controller/Controller';
import './style.css';

/**
 * A template to generate HTML for a TicTacToe Game.
 * Holds the current display state and offers functionality to convert model state into display state.
 */
class Game extends React.Component {

    /**
     * Constructor.
     * The basic model of the application is described here.
     */
    constructor() {
        super();
        this.controller = new Controller(this);
        this.state = {
            board: [],
            status: this.formatStatus(null, true),
            moves: this.formatHistory([])
        };
    }

    /**
     * Function that handles the click on a square.
     * 
     * @param {*} i The index of the clicked square
     */
    squareClick(i) {
        // let the controller decide what happens on click
        this.controller.handleClick(i);
    }

    /**
     * Function to update the currently displayed state by adjusting the state variables.
     * 
     * @param {*} winner The marker of the games winner (X or O). Is null when the game is still in progress or a draw.
     * @param {*} xIsNext Is the next marker an X? True or False
     * @param {*} history The history of all previous game states. Used to generate the jump back.
     * @param {*} squares The current state of the board as an array of size 9 with 'X','O' or null.
     */
    updateView(winner, xIsNext, history, squares) {
        this.setState({
            board: squares,
            status: this.formatStatus(winner, xIsNext),
            moves: this.formatHistory(history)
        });
    }

    /**
     * Function to create a string to display the current status of the game.
     * The next player or the winner.
     * 
     * @param {*} winner The winner of the game or null.
     * @param {*} xIsNext Is X the acting player? True or False.
     */
    formatStatus(winner, xIsNext) {
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (xIsNext
                ? 'X'
                : 'O');
        }
        return status;
    }

    /**
     * Function to create the list of moves to jump back to.
     * 
     * @param {*} history List of all previous game states. Array of squares.
     */
    formatHistory(step) {
        // Format the history into single stepable moves.
        var history = Array(step).fill(1);
        const moves = history.map((step, move) => {
            const desc = move
                ? 'Move #' + move
                : 'Game start';
            return (
                <li key={move}>
                    <a href="#" onClick={() => this.moveClick(move)}>{desc}</a>
                </li>
            );
        });
        return moves;
    }

    /**
     * Click function to jump back to a previous game state.
     * 
     * @param {*} step The index of the move to jump back to.
     */
    moveClick(step) {
        this.controller.jumpToMove(step);
    }

    /**
     * function to render the game.
     */
    render() {
        // Get Status Information from the controller.
        const currentBoard = this.state.board;
        const status = this.state.status;
        const moves = this.state.moves;

        // Return the actual HTML to render
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={currentBoard} onClick={(i) => this.squareClick(i)} />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
