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


  // var getTime = function(arrival) {
  //   var time = Math.abs(Date.now() - Date.parse(arrival)) / 60000;
  //   var delta = Math.floor(time / 60) % 60;
  //   time -= delta * 60;
  //   return time;
  // }

  var getTime = function(arrival) {
    var diff = Date.parse(arrival) - new Date();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var mins = Math.floor(diff / (1000 * 60));
    var secs = Math.floor(diff / 1000);

    var d = days;
    var h = hours - days * 24;
    var m = mins - hours * 60;
    var s = secs - mins * 60;

    return m;
  }


  return (
   <Container>
    {!props.loading &&
    <Row>
      {console.log(props.flights)}
    {props.flights.data.map((flight) => (
      <Card>
        <Image src={require('../airlineLogos/' + flight.airline.iata + '.png').default} width="200" height="200"/>
        <Col>The aircraft will arrive at terminal {flight.arrival.terminal}</Col>
        <Col>This flight is scheduled to arrive in {getTime(flight.arrival.scheduled)} minutes</Col>
      </Card>
     ))}
    </Row>
    }
   </Container>

  )
}

export default FlightData;