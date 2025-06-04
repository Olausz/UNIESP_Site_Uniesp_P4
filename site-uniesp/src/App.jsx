import React from 'react'
import Inicial from './pages/Inicial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'React-bootstrap'

const App = () => {
  return (
    <BrowserRouter>
      <Container className='my-04'>
        <Routes>
          <Route path='/' element={< Inicial />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App