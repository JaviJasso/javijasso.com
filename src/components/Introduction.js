import React, { Component } from 'react';
import Photo from '../images/Javi-Dev.jpg';

class Introduction extends Component {
  render() {
    return (
      <div className='intro' id='Introduction'>
        {/* <div className='section1'>
          <p>01 - Introduction</p>
        </div> */}
        <div className='description'>
          <h1>I am Javi</h1>
          <h2> Developer | Dream Designer</h2>
          <p>I am 32 years old and I was born to dream. I love design, build and I like to discover all of creatice fields such as: graphic design, branding, photography, web design, container homes, sustainability, etc. Now, I am working with React with passion, creativity, enthusiasm and always trying to learn. I like to create quiality and unique products.</p>
        </div>
        {/* <div className='about'>
            <img src={Photo} alt="profile"/>
        </div> */}
      </div>
    )
  }
}

export default Introduction
