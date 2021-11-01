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
            CDW Global was established with the goal to simplify your air travel experience by providing an easy to navigate interface for flight tracking that anyone and everyone can use. We home to provide our users with the most accurate and up to date information to present a greater sense of relaxation and assurance in our stress filled world.
          </p>
          <h3 style={{padding: "20px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px"}}>About the creator</h3>
          <h3 style={{padding: "20px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", opacity: "0.75"}}>Christopher Woodby</h3>
            <Row>
              <Col md="auto">
                <Image src={download} width="200" height="200" style={{padding: "15px", borderRadius: "50%"}}/>
              </Col>
              <Col>
                <Row>
                 <p style={{padding: "15px", fontFamily: "sans-serif"}}>
                   “My passion for design has driven me to build the product I desire to produce without compromise. Every web page should be designed in a similar manner to that of a modern car, for example if a person were to get into a vehicle for the first time, it can be assumed that this person would still be able to operate the vehicle without difficulty. The same standard should exist for modern web pages, while at the same time providing a unique and memorable experience for the user.”</p>
                </Row>
              </Col>
            </Row>
        </Card>
      }
    </Container>

  )
}

export default HomePage;
