import React from 'react'
import Inicial from './pages/Inicial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Navbar from './components/CustomNavbar'


const App = () => {
  return (
    <BrowserRouter> 
      <Navbar></Navbar>
      <Container className='my-04'>
        <Routes>
          <Route path='/' element={< Inicial />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App