import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import sha256 from 'crypto-js/sha256';
var CryptoJS = require("crypto-js");
import axios from 'axios';

var ExistingUser = function(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [encrypted, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('Login');

  var checkPassword = function(password) {
    const key = 'ybdoow sirhc';
    const keyutf = CryptoJS.enc.Utf8.parse(key);
    const iv = CryptoJS.enc.Base64.parse(key);
    const ciphertext = CryptoJS.AES.encrypt(password, keyutf, { iv: iv }).toString();
    setPassword(ciphertext);
  };

  var authenticate = function() {
    axios.get('https://ec2-3-144-21-176.us-east-2.compute.amazonaws.com/users', {params: {userName: props.signedIn, userPassword: encrypted}})
    .then((response) => {
      console.log(response);
      setDisplayName(`Welcome ${response.data[0].firstName}!`);
      props.displayUser(`My Itinerary`)
      props.setUserID(response.data[0].id);
    })
    .catch((error) => {
      console.error(error);
      alert('NOT A VALID LOGIN');
    })
  };

  var handleSubmit = function() {
    authenticate();
    handleClose();
  }

  return (
    <>
    <Button variant="outline-success" onClick={handleShow} style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px"}}>
      {displayName}
    </Button>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px"}}>Log Into Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                onChange={event => props.setUser(event.target.value)}
              />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
                onChange={event => checkPassword(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" type="submit" onClick={handleSubmit}>
            Log In
          </Button>
        </Modal.Footer>
    </Modal>
  </>
  )
};

export default ExistingUser;