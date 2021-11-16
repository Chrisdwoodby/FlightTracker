import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

var PostFlightData = function(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [airline, setAirline] = useState('');
  const [departureAirport, setDepartureAirport] = useState('');


  var postToTripsTable = function() {
    const tripObj = {
      departureAirport: departureAirport,
      destination: destination,
      travelDate: travelDate,
      departureTime: departureTime,
      arrivalTime: arrivalTime,
      flightNumber: flightNumber,
      airline: airline,
      userId: props.userID
    };
    axios.post('http://3.21.180.222/trips', tripObj)
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
    <button className="btn btn-link" role="link" onClick={handleShow} style={{textDecoration: 'none', color: "white", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px"}}>
        Save a Trip
    </button>
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px"}}>Save Your Itinerary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" placeholder="Enter Destination"
              onKeyDown={e => e.stopPropagation()}
              onChange={event => setDestination(event.target.value)}
            />
            <Form.Text className="text-muted">
              Please enter the Country or airport code.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Departure Airport</Form.Label>
            <Form.Control type="text" placeholder="Where are you leaving from?"
              onKeyDown={e => e.stopPropagation()}
              onChange={event => setDepartureAirport(event.target.value)}
            />
            <Form.Text className="text-muted">
              Please enter the Country or airport code.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date of Travel</Form.Label>
            <Form.Control type="text" placeholder="When are you leaving?"
              onKeyDown={e => e.stopPropagation()}
              onChange={event => setTravelDate(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Departure Time</Form.Label>
            <Form.Control type="text" placeholder="Scheduled departure time"
              onKeyDown={e => e.stopPropagation()}
              onChange={event => setDepartureTime(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Flight Number</Form.Label>
            <Form.Control type="text" placeholder="Example: UA0505"
              onChange={event => setFlightNumber(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Arrival Time</Form.Label>
            <Form.Control type="text" placeholder="Scheduled arrival time"
              onKeyDown={e => e.stopPropagation()}
              onChange={event => setArrivalTime(event.target.value)}
            />
          </Form.Group> <Form.Group className="mb-3">
            <Form.Label>Airline</Form.Label>
            <Form.Control type="text" placeholder=" Which airline are you flying with?"
              onKeyDown={e => e.stopPropagation()}
              onChange={event => setAirline(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button id="button" type="submit" onClick={onSubmit}>
          Save Information
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default PostFlightData;
