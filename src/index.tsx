import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'

import { Home } from './pages'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
)
