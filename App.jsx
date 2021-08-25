import React from 'react';
import axios from 'axios';
import FlightData from './components/FlightData.jsx';
import SearchBar from './components/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <SearchBar/>
        <FlightData/>
      </div>
    )
  }
}

export default App;