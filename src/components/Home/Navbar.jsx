import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

function SophisticatedNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Acerca de</Nav.Link>
          <NavDropdown
            title="Servicios"
            id="basic-nav-dropdown"
            show={isDropdownOpen}
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownClose}
          >
            <NavDropdown.Item href="#">Servicio 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Servicio 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Servicio 3</NavDropdown.Item>
            <NavDropdown.Item href="#">Servicio 4</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faUserCircle} />
            Iniciar sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SophisticatedNavbar;
