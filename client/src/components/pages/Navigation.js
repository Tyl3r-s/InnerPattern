import React from "react";
import Auth from "../../utils/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLogo from "../../assets/navlogo.png";

function Navigation() {

  function showNavigation() {

    if (Auth.loggedIn()) {
      return (
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand href="/" className="padding-none">
              <img src={navLogo} id="brand-logo" alt="Brand logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/" onClick={() => Auth.logout()}>
                Logout
              </Nav.Link>
              <Nav.Link href="/CreateJournalEntry">Create An Entry</Nav.Link>
              <Nav.Link href="/JournalEntries">Your Entries</Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="/Login">Mark Otto</a>
            </Navbar.Text>
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
              <Nav.Link href="/Login" id="login">Login</Nav.Link>
              <Nav.Link href="/Signup">Signup</Nav.Link>
              <Nav.Link href="/CreateJournalEntry">Create Entry</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      );
    }
  }

  return <header>{showNavigation()}</header>;
}
export default Navigation;
