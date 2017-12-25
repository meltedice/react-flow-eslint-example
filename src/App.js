// @flow

import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

type Props = {
  message1: string,
  message2: string,
  message3: string,
  myNumber1: number,
}

class App extends Component<Props> {
  render() {
    const { message1, message2, message3, myNumber1 } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <ul>
            <li>{message1}</li>
            <li>{message2}</li>
            <li>{message3}</li>
            <li>{myNumber1}</li>
          </ul>
        </p>
      </div>
    )
  }
}

export default App
