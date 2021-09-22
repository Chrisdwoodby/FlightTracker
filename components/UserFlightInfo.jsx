import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';

var UserFlightInfo = function(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow} style={{color: "white", fontFamily: "sans-serif"}}>
        Your Flight Details
      </Nav.Link>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.userDataPopout}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {console.log(props.userTrips)}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default UserFlightInfo;