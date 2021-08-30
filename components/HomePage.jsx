import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LandingPage from './LandingPage.jsx';
import ReactPlayer from 'react-player';
import airport from '../airlineLogos/airport.mov';

function HomePage(props) {



  return (
    <Container>
      {props.showHome &&

        <Card>
          <h2>Air travel simplified</h2>
          <video controls autostart autoPlay src={airport} type="video/mp4"/>
        </Card>
      }
    </Container>

  )
}

export default HomePage;