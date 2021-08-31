import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

function NavHeader(props) {


  var home = function() {
    props.showHome = true
  }


  return (
    <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#" style={{color: "white", paddingLeft: "50px", paddingRight: "50px"}}>CDW Global</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link onClick={home} style={{color: "white", paddingRight: "50px"}}>Home</Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Flight iata"
        className="mr-2"
        aria-label="Search"
        onChange={event => props.setFlightIata(event.target.value)}
      />
      <FormControl
        type="search"
        placeholder="Airport iata"
        className="mr-2"
        aria-label="Search"
        onChange={event => props.setAirport(event.target.value)}
      />
      <Button variant="outline-success" onClick={props.updateFlight} style={{paddingLeft: "10px"}}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavHeader