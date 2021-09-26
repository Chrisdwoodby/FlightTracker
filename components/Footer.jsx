import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CDWLogo from '../airlineLogos/CDWLogo.png';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import ContactPage from './ContactPage.jsx';

var Footer = function(props) {

  return (
    <div style={{paddingTop: "250px"}}>
      <Row style={{ontFamily: "sans-serif", color: "white", padding: "100px", backgroundColor: "rgb(48,48,48)"}}>
        <Col style={{paddingLeft: "300px"}}>
          <Row><ContactPage/></Row>
          <Nav.Link href="https://aviationstack.com/" style={{color: "white"}}>The AviationStack API</Nav.Link>
          <Nav.Link href="https://www.kayak.com/" style={{color: "white"}}>Book your next trip</Nav.Link>
          <Nav.Link href="https://github.com/Chrisdwoodby/FlightTracker" style={{color: "white"}}>GitHub</Nav.Link>
        </Col>
        <Col>
          <Image src={CDWLogo} width="200px" height="200px"/>
        </Col>
      </Row>
    </div>
  )
}

export default Footer;