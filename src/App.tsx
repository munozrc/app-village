import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import AllPrograms from './pages/AllPrograms'
import Home from './pages/Home'
import SingleProgram from './pages/SingleProgram'

import './App.css'

const App: FC<{}> = () => {
  return (
    <main className="parent-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/programs/:id" element={<SingleProgram />} />
          <Route path="/programs" element={<AllPrograms />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
