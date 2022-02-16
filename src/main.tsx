import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PageLayout } from './app/components/PageLayout'
import { HomePage } from './app/pages/HomePage'
import { ProgramsPage } from './program/pages'

import './main.css'

ReactDOM.render(
  <BrowserRouter>
    <PageLayout>
    <Routes>
      <Route path="/programs/:id" element={<div>working progress</div>} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    </PageLayout>
  </BrowserRouter>,
  document.getElementById('root')
)
