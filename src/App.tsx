import { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AllPrograms from './pages/AllPrograms'
import Home from './pages/Home'
import SingleProgram from './pages/SingleProgram'

const App: FC<{}> = () => {
  return (
    <main className="parent-container">
      <Router>
        <Header />
        <Switch>
          <Route path="/programs/:id" component={SingleProgram} />
          <Route path="/programs" component={AllPrograms} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
