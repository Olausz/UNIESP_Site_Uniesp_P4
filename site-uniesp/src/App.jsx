import React from 'react'
import Inicial from './pages/Inicial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'


const App = () => {
  return (
    <BrowserRouter> 
      <CustomNavbar/>
      <Container className='my-04'>
        <Routes>
          <Route path='/' element={< Inicial />} />
          <Route path="/a-faculdade" element={<Faculdade/>} />
          <Route path="/dpo-lgpd" element={<DpoLgpd/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App