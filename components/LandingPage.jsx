import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';
import FlightData from './FlightData.jsx'
import Container from 'react-bootstrap/Container';
import NavHeader from './NavHeader.jsx';

function LandingPage(props) {

  const [requestedFlight, setFlightIata] = useState('');
  const [loading, setLoading] = useState(true);
  const [flights, getFlight] = useState([]);
  const [requestedAirport, setAirport] = useState('');

  var updateFlight = function() {
    setLoading(true);
    var params = {
      access_key: AUTH_TOKEN,
      flight_iata: requestedFlight,
      arr_iata: requestedAirport,
      limit: 1
    }
    axios.get(`http://api.aviationstack.com/v1/flights`, {params})
    .then(response => {
      getFlight(response.data)
      setLoading(false);
    })
    .catch((error) => {
      console.log('looks like an error occured in FLightData.jsx ' + error)
    })
  }

  return (
    <Container>
      <NavHeader requestedFlight={requestedFlight} setFlightIata={setFlightIata} updateFlight={updateFlight} requestedAirport={requestedAirport} setAirport={setAirport}/>
      <FlightData requestedFlight={requestedFlight} flights={flights} loading={loading}/>
    </Container>
  )

}

export default LandingPage;