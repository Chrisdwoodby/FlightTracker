import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import CreateAccount from './CreateAccount.jsx';
import ExistingUser from './ExistingUser.jsx';
import UserFlightInfo from './UserFlightInfo.jsx';
import PostFlightData from './PostFlightData.jsx';
import CDWLogo from '../airlineLogos/CDWLogo.png';
import Image from 'react-bootstrap/Image';

function NavHeader(props) {
  const [userID, setUserID] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [signedIn, setUser] = useState('Login');
  const [userDataPopout, displayUser] = useState('Please log in to show details');;
  const [loading, setLoading] = useState(true);

  const home = function() {
    props.renderHome(true);
    props.showFlight(false);
  };

  const flight = function() {
    props.updateFlight();
    props.renderFunc();

  }

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#" style={{paddingLeft: "50px",  paddingRight: "50px"}}>
        <Image src={CDWLogo} width="100px" height="100px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link>
            <PostFlightData userID={userID} />
          </Nav.Link>
          <Nav.Link id="home" onClick={home}>
            Home
          </Nav.Link>
          <Nav.Link>
            <UserFlightInfo userDataPopout={userDataPopout}
              loading={loading} userID={userID} setLoading={setLoading}
            />
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Flight Number (IATA)"
            className="mr-2"
            aria-label="Search"
            onChange={event => props.setFlightIata(event.target.value)}
          />
          <FormControl
            type="search"
            placeholder="Arrival Airport"
            className="mr-2"
            aria-label="Search"
            onChange={event => props.setAirport(event.target.value)}
          />
          <Button variant="outline-success" onClick={flight} style={{paddingLeft: "10px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px"}}>Search</Button>
        </Form>
        <Nav.Link>
          <CreateAccount setUser={setUser} signedIn={signedIn}
           setUserFirstName={setUserFirstName} userFirstName={userFirstName}
           setUserLastName={setUserLastName} userLastName={userLastName}
           />
        </Nav.Link>
        <Nav.Link>
          <ExistingUser
            setUser={setUser} signedIn={signedIn}
            displayUser={displayUser}
            setUserID={setUserID} userID={userID}
          />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavHeader;