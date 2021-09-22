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
  const [displayName, setDisplayName] = useState('Log in');

  var checkPassword = function(password) {
    const key = 'ybdoow sirhc';
    const keyutf = CryptoJS.enc.Utf8.parse(key);
    const iv = CryptoJS.enc.Base64.parse(key);
    const ciphertext = CryptoJS.AES.encrypt(password, keyutf, { iv: iv }).toString();
    setPassword(ciphertext);
  };

  var authenticate = function() {
    axios.get(`http://localhost:9009/users`, {params: {userName: props.signedIn}})
    .then((response) => {
      if (encrypted === response.data[0].userPassword) {
      console.log(response);
      setDisplayName(`welcome ${response.data[0].userName}!`);
      } else {
        alert('NOT A VALID LOGIN');
      }
    })
    .catch((error) => {
      console.log(error);
      alert('NOT A VALID LOGIN');
    })
  };

  var handleSubmit = function() {
    authenticate();
    handleClose();
    console.log(encrypted, props.signedIn)
  }

  return (
    <>
    <Button variant="outline-success" onClick={handleShow}>
      {displayName}
    </Button>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Log Into Your Account</Modal.Title>
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
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Log In
          </Button>
        </Modal.Footer>
    </Modal>
  </>
  )
};

export default ExistingUser;