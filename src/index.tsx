import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Apps } from './pages'
import { Navbar } from './components'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router basename="/app-village">
    <Navbar />
    <Routes>
      <Route path=":category" element={<Apps />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h2>404</h2>}/>
    </Routes>
  </Router>
)
