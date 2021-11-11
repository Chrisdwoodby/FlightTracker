import React, {useState} from 'react';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';
import FlightData from './FlightData.jsx'
import NavHeader from './NavHeader.jsx';
import HomePage from './HomePage.jsx';
import Footer from './Footer.jsx';

function LandingPage(props) {

  const [requestedFlight, setFlightIata] = useState('');
  const [loading, setLoading] = useState(true);
  const [flights, getFlight] = useState([]);
  const [requestedAirport, setAirport] = useState('');
  const [showHome, renderHome] = useState(true);
  const [info, showFlight] = useState(false);


  var updateFlight = function() {
    var params = {
      access_key: AUTH_TOKEN,
      flight_iata: requestedFlight,
      arr_iata: requestedAirport,
      limit: 1
    }
    axios.get(`http://api.aviationstack.com/v1/flights`, {params})
    .then(response => {
      getFlight(response.data);
      renderHome(false);
      showFlight(true);
    })
    .catch((error) => {
      console.log('looks like an error occured in FLightData.jsx ' + error)
    })
  }
  const renderFunc = function() {
    if (!showHome && info) {
      return (
        <FlightData requestedFlight={requestedFlight} flights={flights}
        loading={loading} />
      )
    }
    if (showHome && !info) {
      return (
        <HomePage showHome={showHome} renderHome={renderHome}/>
      )
    }
  }

  return (
    <div>
      <NavHeader renderFunc={renderFunc} requestedFlight={requestedFlight} setFlightIata={setFlightIata}
       updateFlight={updateFlight} requestedAirport={requestedAirport} 
       setAirport={setAirport} renderHome={renderHome} showFlight={showFlight}/>
       {renderFunc()}
      <Footer/>
    </div>
  )

}

export default LandingPage;