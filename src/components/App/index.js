import React, { Component } from 'react';
import './index.css'

import NavBar from '../NavBar'
import Introduction from '../Introduction'
import Achivements from '../Achivements'
import Contact from '../Contact'
import Portfolio from '../Portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Introduction />
        <Portfolio />
        <Achivements />
        <Contact />
      </div>
    );
  }
}

export default App;
