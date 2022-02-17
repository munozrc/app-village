import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PageLayout } from './app/components/PageLayout'
import { HomePage } from './app/pages/HomePage'
import { ProgramPage } from './app/pages/ProgramPage'
import { ProgramsPage } from './app/pages/ProgramsPage'

import './main.css'

ReactDOM.render(
  <BrowserRouter>
    <PageLayout>
    <Routes>
      <Route path="/programs/:id" element={<ProgramPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    </PageLayout>
  </BrowserRouter>,
  document.getElementById('root')
)
