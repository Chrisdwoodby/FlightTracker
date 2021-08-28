import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LandingPage from './LandingPage.jsx';

function HomePage(props) {



  return (
    <Container>
      {props.showHome &&
        <h1>
          home data here
        </h1>
      }
    </Container>

  )
}

export default HomePage;