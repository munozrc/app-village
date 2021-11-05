import React, { FC } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import AllPrograms from './pages/AllPrograms'
import SingleProgram from './pages/SingleProgram'

import './App.css'

const App: FC<{}> = () => {
  return (
    <main className='parent-container'>
      <Router>
        <Header />
        <Switch>
          <Route path='/programs/:id' component={SingleProgram} />
          <Route path='/programs' component={AllPrograms} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
