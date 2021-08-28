import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LandingPage from './LandingPage.jsx';
import Image from 'react-bootstrap/Image';

function FlightData(props) {

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
    if (m <= 0) {
      return 'The aircraft has landed and will arrive at the gate shortly';
    } else {
      return 'This flight is scheduled to arrive in ' + m + ' minutes';
    }
  }

  var flightStatus = function(status) {
    if (status === null) {
      return 'Arriving on time.'
    } else {
      return 'This flight has been delayed ' + props.flights.data[0].arrival.delay + ' minutes.'
    }
  }


  return (
   <Container>
    {!props.loading && !props.showHome &&
    <Row>
      {console.log(props.flights)}
      <Row style={{padding: '12px', fontSize:"30px"}}>{props.flights.data[0].airline.name + ' flight ' + props.flights.data[0].flight.icao}</Row>
      <Col md="auto">
        <Image src={require('../airlineLogos/' + props.flights.data[0].airline.iata + '.png').default} width="200" height="200"/>
      </Col>
      <Col>
        <Row style={{padding: '12px', backgroundColor: "rgb(242,244,244)"}}>The aircraft will arrive at gate {props.flights.data[0].arrival.gate} in terminal {props.flights.data[0].arrival.terminal}</Row>
        <Row style={{padding: '12px', backgroundColor: "rgb(242,244,244)"}}>{getTime(props.flights.data[0].arrival.scheduled)}</Row>
      </Col>
      <Row style={{padding: '12px', backgroundColor: "rgb(242,244,244)"}}>
      {flightStatus(props.flights.data[0].arrival.delay)}
    </Row>
    </Row>
    }
   </Container>
  )
}

export default FlightData;