import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import CreateAccount from './CreateAccount.jsx';
import ExistingUser from './ExistingUser.jsx';
import UserFlightInfo from './UserFlightInfo.jsx';
import PostFlightData from './PostFlightData.jsx';
import axios from 'axios';

function NavHeader(props) {
  const [userID, setUserID] = useState('')
  const [signedIn, setUser] = useState('Log In');
  const [userDataPopout, displayUser] = useState('Please log in to show details');
  const [userTrips, setTrips] = useState([])

  var home = function() {
    props.showHome(false);
  };


  var getUserFlightData = function(id) {

    axios.get('http://localhost:9009/trips', {params: {userId: id}})
    .then((response) => {
      console.log(response);
      setTrips(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
  };


  return (
    <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#" style={{color: "white", paddingLeft: "50px", paddingRight: "50px", fontFamily: "sans-serif"}}>CDW Global</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link onClick={home} style={{color: "white", paddingRight: "50px", fontFamily: "sans-serif"}}>Home</Nav.Link>
      <Nav.Link>
        <PostFlightData userID={userID}/>
      </Nav.Link>
      <Nav.Link>
        <UserFlightInfo userDataPopout={userDataPopout} displayUser={displayUser}
          userTrips={userTrips}
        />
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Flight iata"
        className="mr-2"
        aria-label="Search"
        onChange={event => props.setFlightIata(event.target.value)}
      />
      <FormControl
        type="search"
        placeholder="Airport iata"
        className="mr-2"
        aria-label="Search"
        onChange={event => props.setAirport(event.target.value)}
      />
      <Button variant="outline-success" onClick={props.updateFlight} style={{paddingLeft: "10px"}}>Search</Button>
    </Form>
    <Nav.Link>
      <CreateAccount setUser={setUser} signedIn={signedIn}/>
    </Nav.Link>
    <Nav.Link>
      <ExistingUser
        setUser={setUser} signedIn={signedIn}
        getUserFlightData={getUserFlightData}
      />
    </Nav.Link>
  </Navbar.Collapse>
</Navbar>
  )
};

export default NavHeader;