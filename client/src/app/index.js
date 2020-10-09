import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Navbar} from '../components'
/*important de importer le bootstrap si non le style ne apparait pas*/
import 'bootstrap/dist/css/bootstrap.min.css'

import {MainPage} from '../pages'
function App() {
  return (
    <Router>
      <MainPage/>
    </Router>
  )
}

export default App;
