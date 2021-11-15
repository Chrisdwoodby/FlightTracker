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
import Dropdown from 'react-bootstrap/Dropdown';

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
    <Navbar id="nav" expand="lg">
      <Navbar.Brand href="#" style={{paddingLeft: "50px",  paddingRight: "50px"}}>
        <Image  onClick={home} src={CDWLogo} width="100px" height="100px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Dropdown id="dropdown">
            <Dropdown.Toggle id="button" >
                User Menu
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">
                <Nav.Link>
                  <PostFlightData userID={userID} />
                </Nav.Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <Nav.Link>
                  <UserFlightInfo userDataPopout={userDataPopout}
                    loading={loading} userID={userID} setLoading={setLoading}
                  />
                </Nav.Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Nav.Link id="home" onClick={home}>
                  Home
                </Nav.Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown id="dropdown">
          <Dropdown.Toggle id="button" >
              Sign in Options
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1">
              <Nav.Link>
              <CreateAccount setUser={setUser} signedIn={signedIn}
                setUserFirstName={setUserFirstName} userFirstName={userFirstName}
                setUserLastName={setUserLastName} userLastName={userLastName}
                />
              </Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <Nav.Link>
              <ExistingUser
                setUser={setUser} signedIn={signedIn}
                displayUser={displayUser}
                setUserID={setUserID} userID={userID}
                />
              </Nav.Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
          <Button id="button" onClick={flight} style={{paddingLeft: "10px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px"}}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavHeader;
