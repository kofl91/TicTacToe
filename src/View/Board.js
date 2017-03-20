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

/**
 * Template to render one square.
 * 
 * @param {*} props Contains the value to render inside the square.
 */
function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

/**
 * Template to render the board or state of the game.
 */
class Board extends React.Component {
    /**
     * Helper to render one square.
     * @param {*} i The index of the renderes square.
     */
    renderSquare(i) {
        //console.log("Field " + i + " is " + this.props.squares);
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }
    /**
     * Function to render the template.
     */
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;
