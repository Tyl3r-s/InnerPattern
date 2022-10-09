import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import navLogo from "../../assets/navlogo.png";

import Auth from '../../utils/auth';

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
              <Nav.Link href="/Login" onClick={() => Auth.logout()}>
                Logout
              </Nav.Link>
              <Nav.Link href="/CreateJournalEntry">Create An Entry</Nav.Link>
              <Nav.Link href="/JournalEntries">Your Entries</Nav.Link>
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

// const Navigation = () => {

//   return (
//     <Navbar bg="dark">
//       {Auth.loggedIn() ? (
//         <Container>
//           <Navbar.Brand href="/" as={Link} to='/' className="padding-none">
//             <img src={navLogo} id="brand-logo" alt="Brand logo" />
//           </Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//             <Nav.Link as={Link} to='/CreateJournalEntry'>Create Entry</Nav.Link>
//             <Nav.Link as={Link} to='/JournalEntries'>Your Entries</Nav.Link>
//           </Nav>
//         </Container>
//       ) : (
//         <Container>
//           <Navbar.Brand href="/" as={Link} to='/' className="padding-none">
//             <img src={navLogo} id="brand-logo" alt="Brand logo" />
//           </Navbar.Brand>
//           <Nav.Link as={Link} to='/Login' id="login">Login</Nav.Link>
//           <Nav.Link as={Link} to='/Signup'>Signup</Nav.Link>
//         </Container>
//       )
//       }
//     </Navbar>
//   );
// };

// export default Navigation;


