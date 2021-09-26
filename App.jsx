import React from 'react';
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