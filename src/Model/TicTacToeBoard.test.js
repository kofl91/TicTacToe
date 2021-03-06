/**
 * TicTacToe
 * 
 * Development of a familiar and easy game as a console based application.
 * 
 * A simple Test project to expierience JavaScript Developement in Eclipse. Test
 * Driven Developement with phantomJS and jasmine
 * 
 * @author Kim Fehrs
 */

/**
 * This file contains tests for the TicTacToeBoard.
 */

import TicTacToeBoard from './TicTacToeBoard';



describe("TicTacToeBoard Test", function () {
    //var TicTacToeBoard = require('../lib/TicTacToe/TicTacToeBoard');

    beforeEach(() => {
        // Creates a new TicTacToeBoard;
        this.board = new TicTacToeBoard();
    });

    it("should create an empty board", () => {
        var result = this.board.toString();
        expect(result).toEqual(" | | \n-----\n | | \n-----\n | | \n");
    });

    it("should place a cross", () => {
        var x = [0, 0, 1, 2, 1];
        var y = [2, 1, 1, 0, 2];
        var results = new Array(5);

        for (var i = 0; i < 5; i++) {
            this.board.placeCross(x[i], y[i]);
            results[i] = this.board.at(x[i], y[i]);
            expect(results[i]).toEqual("X");
        }
    });

    it("should place a circle", () => {
        this.board = new TicTacToeBoard();
        var x = [0, 0, 1, 2, 1];
        var y = [2, 1, 1, 0, 2];
        var results = new Array(5);

        for (var i = 0; i < 5; i++) {
            this.board.placeCircle(x[i], y[i]);
            results[i] = this.board.at(x[i], y[i]);
            expect(results[i]).toEqual("O");
        }
    });

    it("should start with player X", () => {
        expect(this.board.xIsNext).toBeTruthy();
    });

    it("should track what player is currently playing", () => {
        this.board.placeMarker(0, 0);
        expect(this.board.xIsNext).toBeFalsy();
        this.board.placeMarker(0, 1);
        expect(this.board.xIsNext).toBeTruthy();
    });

    it("should reject moves on already occupied fields", () => {
        this.board.placeMarker(0, 0);
        expect(this.board.xIsNext).toBeFalsy();
        this.board.placeMarker(0, 0);
        expect(this.board.xIsNext).toBeFalsy();
    });

    it("should convert into single dimension array", () => {
        var arr = Array(9).fill(null);
        var boardArr = this.board.toArray();
        expect(boardArr).toEqual(arr);
        // Still equal after placement?
        this.board.placeMarker(1, 0);
        arr[1] = 'X';
        boardArr = this.board.toArray();
        expect(this.board.at(1, 0)).toEqual(arr[1]);
        expect(boardArr).toEqual(arr);
        // Rightly rotated?
        this.board.placeMarker(0, 1);
        arr[3] = 'O';
        boardArr = this.board.toArray();
        expect(this.board.at(0, 1)).toEqual(arr[3]);
        expect(boardArr).toEqual(arr);
    });

    it("should contain the correct history", () => {
        var emptyBoard = this.board.getBoardCopy();
        expect(this.board.moveList[0]).toEqual(emptyBoard);

        this.board.placeMarker(0, 0);
        var firstMoveBoard = this.board.getBoardCopy();

        expect(this.board.moveList[0]).toEqual(emptyBoard);
        expect(this.board.moveList[1]).toEqual(firstMoveBoard);
    });

    it("should contain the correct history after time travel", () => {
        var emptyBoard = this.board.getBoardCopy();
        this.board.placeMarker(0, 0);
        var firstMoveBoard = this.board.getBoardCopy();
        this.board.rememberMove(0);
        this.board.placeMarker(0, 0);
        expect(this.board.moveList[0]).toEqual(emptyBoard);
        expect(this.board.moveList[1]).toEqual(firstMoveBoard);
    });
});
