import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Navbar} from '../components'

import {MainPage} from '../pages'
function App() {
  return (
    <Router>
       <Navbar/>
      <MainPage/>
    </Router>
  )
}

export default App;
