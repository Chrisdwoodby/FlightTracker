import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';
import SearchBar from './SearchBar.jsx'

function FlightData(props) {

  const [loading, setLoading] = useState(true);
  const [flights, getFlight] = useState([]);


  useEffect(() => {
    setLoading(true);
    const authStr = AUTH_TOKEN;
    axios.get(`https://api.aviationstack.com/v1/flights?flight_icao=${props.requestedFlight}`, {headers: {access_key: authStr}})
    .then(response => {
      getFlight(response.data)
      setLoading(false);
    })
    .catch((error) => {
      console.log('looks like an error occured in FLightData.jsx ' + error)
    })
  }, []);



  return (
    <h1>flight data here</h1>

  )
}

export default FlightData;