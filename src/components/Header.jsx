import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
 <Navbar expand="lg" className=" mb-5" style={{backgroundColor:'#ffbc63'}}>
      <Container>
        <Navbar.Brand href="#home" >
        <i className="fa-solid fa-cart-shopping" />
        { ' '}
          <Link to={'/'} style={{textDecoration:'none'}}>STORE</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
      </Container>
    </Navbar>    
    </>
  )
}

export default Header
