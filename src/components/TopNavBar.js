// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { GiArchiveRegister } from "react-icons/gi";

export const TopNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          CommuniBizApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/registro">
              Registro <GiArchiveRegister />
            </Nav.Link>
            <Nav.Link as={Link} to="/busqueda">
              Búsqueda <BsSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
