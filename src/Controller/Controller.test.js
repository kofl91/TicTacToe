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
import Controller from './Controller';

describe("Controller Test", function () {
    let viewMock = {
        updateView: () => { }
    };
    let controller;

    beforeEach(() => {
        controller = new Controller(viewMock);
    });

    it("should handle clicks", () => {
        controller.handleClick(1);
    });

    it("should jump to previous moves", () => {
        controller.jumpToMove(0);
    });

    it("should calculate a winner", () => {
        controller.calculateWinner();
    });
});