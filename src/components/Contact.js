import React, { Component } from 'react';
import Linkedin from '../images/linkedin.png';
import Email from '../images/email.png';

class Contact extends Component {
  render() {
    return (
      <div className='contact' id='Contact'>
         <p>Contact</p>
         <div className='contact'>
          <div className='link'>
            <a href="https://www.linkedin.com/in/javi-jasso-81a52948/" target="_blank">
              <img src={ Linkedin } alt="Linkedin"/>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/JaviJasso" target="_blank">
              <i className="devicon-github-plain" />
              <span>GitHub</span>
            </a>
            <a href="mailto:jjasso1@asu.edu">
              <img src={ Email } alt="Email"/>
              <span>Email</span>
            </a>
          </div>
         </div>
      </div>
    )
  }
}

export default Contact
