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
    axios.get(`http://api.aviationstack.com/v1/flights?access_key=${authStr}&flight_icao=cdc8029`)
    .then(response => {
      console.log(response.data)
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