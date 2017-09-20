import React, { Component } from 'react';

class NavBar extends Component {
  render() {

    return (
      <nav className='navbar'>
        <a href='#Introduction' to='#Introduction'>Introduction</a>
        <a href='#Portfolio' to='#Portfolio'>Porfolio</a>
        <a href='#Achivements' to='#Achivements'>Achivements</a>
        <a href='#Contact' to='#Contact'>Contact</a>
      </nav>
    )
  }
}

export default NavBar
