import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import navLogo from "../../assets/navlogo.png";

import Auth from '../../utils/auth';

function Navigation() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Navbar className="navClass" bg="dark">
          <Container>
            <Navbar.Brand href="/" className="padding-none">
              <img src={navLogo} id="brand-logo" alt="Brand logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Profile">Account</Nav.Link>
              <Nav.Link href="/Login" onClick={() => Auth.logout()}>
                Logout
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand href="/" className="padding-none">
              <img src={navLogo} id="brand-logo" alt="Brand logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Signup">Signup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      );
    }
  }

  return <header>{showNavigation()}</header>;
}

export default Navigation;


