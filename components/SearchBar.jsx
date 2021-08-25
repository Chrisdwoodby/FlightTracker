import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requestedFlight: ''
    }
  }
  render() {
    return (
      <input placeholder="Enter your desired flight number..."/>
    )
  }
}

export default SearchBar;