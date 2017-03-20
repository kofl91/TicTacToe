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

import React, { Component } from 'react';
import Game from './Game';
import logo from './logo.svg';
import './App.css';

/**
 * The App that is rendered.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
