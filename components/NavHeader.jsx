import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

function NavHeader(props) {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">CDW Global</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={event => props.setFlightIata(event.target.value)}
      />
      <Button variant="outline-success" onClick={props.updateFlight}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavHeader