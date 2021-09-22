import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';

var PostFlightData = function(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('')

  var postToTripsTable = function() {
    const tripObj = {
      destination: destination,
      travelDate: travelDate,
      userId: props.userID
    };
    axios.post('http://localhost:9009/trips', tripObj)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      alert('Please log in first');
    })
  };

  var onSubmit = function() {
    postToTripsTable();
    handleClose();
  }


  return (
  <>
    <Nav.Link onClick={handleShow} style={{color: "white", fontFamily: "sans-serif"}}>
        Save a Trip
    </Nav.Link>
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title style={{fontFamily: "sans-serif"}}>Save your itinerary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" placeholder="Enter Destination"
              onChange={event => setDestination(event.target.value)}
            />
            <Form.Text className="text-muted">
              Please enter the Country or arrival airport.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date of travel</Form.Label>
            <Form.Control type="text" placeholder="When are you leaving?"
              onChange={event => setTravelDate(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Save Information
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default PostFlightData;