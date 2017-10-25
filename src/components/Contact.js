import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='contact' id='Contact'>
         <p>Contact</p>
         <div className='contact'>
          <div className='link'>
            <a href="https://www.linkedin.com/in/javi-jasso-81a52948/" target="_blank">
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/JaviJasso" target="_blank">
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              <span>GitHub</span>
            </a>
            <a href="mailto:jjasso1@asu.edu">
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <span>Email</span>
            </a>
          </div>
         </div>
      </div>
    )
  }
}

export default Contact
