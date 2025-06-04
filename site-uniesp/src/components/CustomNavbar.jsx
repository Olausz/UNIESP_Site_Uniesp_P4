
import React, { useState } from 'react' 
import { Container, Navbar, NavbarCollapse, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const CustomNavbar = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true) 


  return (
   <>
   <Navbar expand="md" style={{ backgroundColor: '#002F6C '}} variant="dark" className="px-3 shadow-sm">
    <Container fluid >
        <Navbar.Brand as={Link} to='/' className="d-flex align-items-center">
        <img src="/Logo.png" alt="Uniesp Logo" width={60} height={60} className="me-2 rounded"></img>
          <span style={{fontSize: '1.25rem'}}>SITE FICTICIO - DISCIPLINA FRONT-END - REACT</span>
        </Navbar.Brand>
      
         {/* Botao Hamburguer apenas em telas pequenas  */}
    <Navbar.Toggle onClick={handleShow} />
      <NavbarCollapse className="justify-content-end d-one d-md-flex">
        <Nav>
          <Nav.Link as={Link} to="/a-faculdade" className="px-3"> A faculdade </Nav.Link>
          <Nav.Link as={Link} to="/dpo-lgpd" className="px-3"> DPO LGPD </Nav.Link>
          <Nav.Link as={Link} to="/noticias" className="px-3"> Notícias </Nav.Link>
          <Nav.Link as={Link} to="/admin-noticias" className="px-3"> Noticias do adm </Nav.Link>
          </Nav>
      </NavbarCollapse>
    </Container>
   </Navbar>

     {/* Menu lateral (Offcanvas) visível em telas pequenas */}

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> Menu </Offcanvas.Title>
          </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">

                {/* Cada item de menu fecha o offcanvas*/}

                <Nav.Link as={Link} to="/a-faculdade" onClick={handleClose}> A faculdade </Nav.Link>
                <Nav.Link as={Link} to="/dpo-lgpd" onClick={handleClose}> DPO LGPD </Nav.Link>
                <Nav.Link as={Link} to="/noticias" onClick={handleClose}> Notícias </Nav.Link>
                <Nav.Link as={Link} to="/admin-noticias"onClick={handleClose}> Noticias do adm </Nav.Link>

              </Nav>
            </Offcanvas.Body>
      </Offcanvas>
   </>
  )
}

export default CustomNavbar