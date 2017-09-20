import React, { Component } from 'react';
import Photo from '../images/Javi-Dev.jpg';

class Achivements extends Component {
  render() {
    return (
      <div className='achivements' id='Achivements'>
        <div className='section1'>
          <p id='Languages'>03 - Languages</p>
        </div>
        <div className='ach'>
          <div>
            <h1>TECHNICALS SKILLS
              <div id='line'></div>
            </h1>
          </div>
          <div className='skillsBody'>
            <div className='icon'>
              <i className="fa fa-desktop" aria-hidden=""></i>
            </div>
            <h2>OPERATING SYSTEMS</h2>
            <p>Microsoft Windows 10, Mac OS X, Apple iOS, Google Android.</p>
            <div className='icon'>
              <i className="fa fa-building" aria-hidden=""></i>
            </div>
            <h2>DEVOPS</h2>
            <p>Git, GitHub, MySQL</p>
            <div className='icon'>
              <i className="fa fa-language" aria-hidden=""></i>
            </div>
            <h2>LANGUAGES</h2>
            <p>React, SQL, HTML, JavaScript, XML.</p>
            <div className='icon'>
              <i className="fa fa-wrench" aria-hidden=""></i>
            </div>
            <h2>WEB TOOLS</h2>
            <p>JSON, JQUERY</p>
            <div className='icon'>
              <i className="fa fa-user" aria-hidden=""></i>
            </div>
            <h2>UX & UI</h2>
            <p>HTML/CSS, JavaScript, Slack</p>
          </div>
        </div>
        <div className='about'>
            <img src={Photo} alt="profile"/>
        </div>
      </div>
    )
  }
}

export default Achivements
