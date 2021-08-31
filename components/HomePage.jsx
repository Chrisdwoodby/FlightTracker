import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LandingPage from './LandingPage.jsx';
import ReactPlayer from 'react-player';
import airport from '../airlineLogos/airport.mov';
import download from '../airlineLogos/download.png';
import Image from 'react-bootstrap/Image';

function HomePage(props) {

  return (
    <Container style={{border: "none"}}>
      {props.showHome &&

        <Card style={{border: "none"}}>
          <h2 className="centered" >Air travel simplified</h2>
          <video autostart="true" autoPlay loop muted src={airport} type="video/mp4" style={{padding: "20px"}}/>
          <h3 style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px"}}>Our mission</h3>
          <p style={{padding: "20px", fontFamily: "sans-serif"}}>
            CDW Global was establised with the goal to simplify your air travel expreience by prodiving an easy to navigate interface for flight tracking that anyone and everyone can use. We home to provide our users with the most accurate and up to date information to present a greater sense of relaxation and assurance in our stress filled world.
          </p>
          <h3 style={{padding: "20px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px"}}>About the creator</h3>
            <Row>
              <Col md="auto">
                <Image src={download} width="200" height="200" style={{padding: "15px", borderRadius: "50%"}}/>
              </Col>
              <Col>
                <Row>
                 <p style={{padding: "15px", fontFamily: "sans-serif"}}>Christopher Woodby, a Hack Reactor Software Engineering Graduate with 5 years of experience working in client-facing environments, leading and managing personnel through strategic collaboration to continuously improve customers' experience and their satisfaction with the organization. Experienced in developing innovative solutions to more effectively meet clients' expectations through cutting edge product development and data management. Holds a strong belief that technology has the potential to influence how our world evolves not only technologically, but as a society. A people first oriented work ethic, determined to utilize the tolls of today to engineer a better tomorrow. </p>
                </Row>
              </Col>
            </Row>
        </Card>
      }
    </Container>

  )
}

export default HomePage;