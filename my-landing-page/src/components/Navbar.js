// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './assets/logo.svg'; // Adjust path as per your structure
import './CSS/Navbar.css'; // Ensure this import is present

function CustomNavbar() {
  return (
    <div className="custom-navbar-container">
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Atomize Logo" className="logo" />
       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#github">Github</Nav.Link>
            <Nav.Link href="#designers">For Designers</Nav.Link>
            <Nav.Link href="#documentation" className="doc-button">Documentation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
