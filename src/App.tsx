import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import SingleProgram from './pages/SingleProgram'
import { ProgramsPage } from './program/pages'
import { HomePage } from './home/pages'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/programs/:id" element={<SingleProgram />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
