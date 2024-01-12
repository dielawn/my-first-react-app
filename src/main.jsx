import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Greeting } from './Greeting.jsx'
import {PickAHand} from './GuessGame.jsx'
import { LessonTest } from './Players.jsx'
import TodoList from './TodoList.jsx'
import Bio from './Bio.jsx'
import { Avatar } from './Avatar.jsx'
import { Animals } from './Animals.jsx'
import { CreateList } from './Arrays.jsx'
import { ArrayFilter } from './FilterArray.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <PickAHand />
   <LessonTest />
   <TodoList />
   <Bio />
   <Avatar />
   <Animals />
<CreateList />
<ArrayFilter />
  </React.StrictMode>,
)
