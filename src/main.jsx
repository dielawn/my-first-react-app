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
import { Poem } from './Poem.jsx'
import { Buttons } from './Buttons.jsx'
import { Profile } from './Image.jsx'
import { CardProfile } from './Card.jsx'
import Gallery from './Gallery.jsx'

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
<Poem />
<Buttons />
<Profile />
<CardProfile />
<Gallery />


  </React.StrictMode>,

)
