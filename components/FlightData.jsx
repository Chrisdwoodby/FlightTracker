import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LandingPage from './LandingPage.jsx';
import Image from 'react-bootstrap/Image';
// import UA from '../airlineLogos/UA.png';
// import DL from '../airlineLogos/DL.png';
// import VS from '../airlineLogos/VS.png';
// var name = require('../airlineLogos/AA.png').default;


function FlightData(props) {

  return (
   <Container>
    {!props.loading &&
    <Row>
      {console.log(props.flights)}
    {props.flights.data.map((flight) => (

      <Card>
        <Image src={require('../airlineLogos/' + flight.airline.iata + '.png').default} width="200" height="200"/>
        <Col>The aircraft will arrive at terminal {flight.arrival.terminal}</Col>
        {/* <Col>{flight.aircraft.iata}</Col> */}
        <Col>This flight is scheduled to arrive in {Math.round((Date.now() - Date.parse(flight.arrival.scheduled)) / 60000)} minutes</Col>
      </Card>
     ))}
    </Row>
    }
   </Container>

  )
}

export default FlightData;