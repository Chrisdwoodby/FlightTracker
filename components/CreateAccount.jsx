import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import sha256 from 'crypto-js/sha256';
var CryptoJS = require("crypto-js");
import axios from 'axios';

var CreateAccount = function(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [encrypted, setPassword] = useState('');

  var newPassword = function (password) {
    const key = 'ybdoow sirhc';
    const keyutf = CryptoJS.enc.Utf8.parse(key);
    const iv = CryptoJS.enc.Base64.parse(key);
    const ciphertext = CryptoJS.AES.encrypt(password, keyutf, { iv: iv }).toString();
    setPassword(ciphertext);
  };

  var addUser = function() {
    const userObj = {
      firstName: props.userFirstName,
      lastName: props.userLastName,
      userName: props.signedIn,
      userPassword: encrypted
    };
    axios.post('http://www.cdwflighttracker.com/users', userObj)
    .then((response) => {
      props.setUser(`Welcome ${props.signedIn}!`)
    })
    .catch((error) => {
      console.log(error)
    })
  };
  //-------------------------------------------------------
  var confirmPassword = function(password) {
    var decrypt = CryptoJS.AES.decrypt(encrypted, 'secret key 123');
    var originalText = decrypt.toString(CryptoJS.enc.Utf8);

    if (password !== originalText) {

    }
  }
  //-------------------------------------------------------

  var handleSubmit = function() {
    addUser();
    handleClose();
  }

  return (
    <div style={{paddingLeft: "150px"}}>
      <Button data-testid="create-account" variant="outline-success" onClick={handleShow} style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px"}}>
        Sign Up
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "2px"}}>Create Your Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name"
                  onChange={event => props.setUserFirstName(event.target.value)}
                required={true}/>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name"
                  onChange={event => props.setUserLastName(event.target.value)}
                required={true}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  onChange={event => props.setUser(event.target.value)}
                required={true}/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  onChange={event => newPassword(event.target.value)}
                required={true}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                required={true}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" type="submit" onClick={handleSubmit}>
              Create Account
            </Button>
          </Modal.Footer>
      </Modal>
    </div>
  )
}
export default CreateAccount;
