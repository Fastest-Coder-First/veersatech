import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

const NavbarComponent = () => {
  const { currentUser, loggedIn, setLoggedIn } = useAuth();
  console.log(currentUser);

  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/finances">Finances</Nav.Link>
            <Nav.Link href="#">Calendar</Nav.Link>
            <Nav.Link href="#">Categories</Nav.Link>
          </Nav>

          {/* username and icon */}
          <Nav>
            <Nav.Link>Hi, {currentUser && currentUser.name}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
