import React, { Component } from 'react'

import sayHelloTo from './hello'
import { sayHelloToJack, sayHelloToNumber } from './hello2'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <ul>
            <li>{sayHelloTo('Mike')}</li>
            <li>{sayHelloToJack()}</li>
            <li>{sayHelloToNumber(33)}</li>
          </ul>
        </p>
      </div>
    )
  }
}

export default App
