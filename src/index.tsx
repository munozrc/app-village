import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'

import { Home } from './pages'
import { Apps } from './pages/apps'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path=":category" element={<Apps />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h2>404</h2>}/>
    </Routes>
  </Router>
)
