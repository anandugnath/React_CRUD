import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';
export const Header = () => {
    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link  as={Link} to="/employee" >Employee</Nav.Link>
              <Nav.Link  as={Link} to="department">Department</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};
