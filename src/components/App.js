import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'
import Achivements from '../components/Achivements'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'

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
