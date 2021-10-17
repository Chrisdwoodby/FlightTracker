import React, {useState} from 'react';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card'

var UserFlightInfo = function(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userTrips, setTrips] = useState([]);

  var getUserFlightData = function() {
    props.setLoading(true);
    axios.get('https://cdwflighttracker.herokuapp.com/trips', {params: {userId: props.userID}})
    .then((response) => {
      console.log(response);
      setTrips(response.data);
      props.setLoading(false);
    })
    .catch((error) => {
      console.error(error);
    })
  };

  var handleClick = function() {
    getUserFlightData();
    handleShow();
  }
  return (
    <>
      <button className="btn btn-link" role="link" onClick={handleClick} style={{textDecoration: 'none', color: "white", fontFamily: "sans-serif", paddingRight: "100px", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px"}}>
        Your Flight Details
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.userDataPopout}</Offcanvas.Title>
        </Offcanvas.Header>
        {!props.loading &&
        <Offcanvas.Body>
          <Card>
            {userTrips.map((item) => (
              <div>
                <Card style={{padding: "10px", fontFamily: "sans-serif", backgroundColor: "#ffe8ff"}}>{`${item.airline} ${item.flightNumber}`}</Card>
                <Card style={{padding: "10px", color: "white", backgroundColor: "rgb(48,48,48)", fontFamily: "sans-serif"}}>{`Departing ${item.departureAirport} on ${item.travelDate} at ${item.departureTime}. Scheduled to arrive at ${item.arrivalTime} in ${item.destination}.`}</Card>
              </div>
            ))}
          </Card>
        </Offcanvas.Body>
        }
      </Offcanvas>
    </>
  )
}

export default UserFlightInfo;
