import React from 'react';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Video Demo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
        <Nav.Link><Link to="/upload" style={{ textDecoration: 'none' }}>Upload</Link></Nav.Link>
        <Nav.Link><Link to="/video" style={{ textDecoration: 'none' }}>Video</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
