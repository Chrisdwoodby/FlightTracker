import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

var ContactPage = function() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Nav.Link onClick={handleShow} style={{color: "white", paddingLeft: "25px"}}>
        Contact
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", fontSize: "15px"}}>Looking Forward to Hearing From You</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", fontSize: "15px"}}>Email</h3>
          <p>cdwflighttracker@gmail.com</p>
          <h3 style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", fontSize: "15px"}}>LinkedIn</h3>
          <Nav.Link href="https://www.linkedin.com/in/christopher-woodby-766a88202/">LinkedIn/ChristopherWoodby
          </Nav.Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ContactPage;