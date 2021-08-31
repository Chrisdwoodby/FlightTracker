import React from 'react';
import axios from 'axios';
import FlightData from './components/FlightData.jsx';
import LandingPage from './components/LandingPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <LandingPage/>
      </div>
    )
  }
}

export default App;