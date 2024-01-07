import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Greeting } from './Greeting.jsx'
import {PickAHand} from './GuessGame.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <PickAHand />
   
  </React.StrictMode>,
)
