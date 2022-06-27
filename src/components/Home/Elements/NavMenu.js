import React from 'react'
import {
  Container,
  Nav,
  Navbar,
  Button
} from 'react-bootstrap';

const NavMenu = () => {
  return (
    <Navbar expand="lg" id='navbar'>
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Portfoli</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Button>Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMenu