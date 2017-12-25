// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import sayHelloTo from './hello'
import { sayHelloToJack, sayHelloToNumber } from './hello2'

const message1: string = sayHelloTo('Mike')
const message2: string = sayHelloToJack()
const message3: string = sayHelloToNumber(33)
const myNumber1: number = 11

sayHelloTo(12)

ReactDOM.render(
  <App
    message1={message1}
    message2={message2}
    message3={message3}
    myNumber1={myNumber1}
  />,
  // $FlowIgnore
  document.getElementById('root')
)
registerServiceWorker()
