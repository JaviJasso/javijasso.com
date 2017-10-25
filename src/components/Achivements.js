import React, { Component } from 'react';

class Achivements extends Component {
  render() {
    return (
      <div className='achivements' id='Achivements'>
        <div className='ach'>
          <div className="skills">
            <h1>TECHNICALS SKILLS
              <div id='line'></div>
            </h1>
          </div>
          <br></br>
          <div className='skillsBody'>
            <div className='icon'>
              <i className="fa fa-desktop" aria-hidden=""></i>
            </div>
            <br></br>
            <h2>OPERATING SYSTEMS</h2>
            <p>Microsoft Windows 10, Mac OS X, Apple iOS, Google Android.</p>
            <br></br>
            <div className='icon'>
              <i className="fa fa-building" aria-hidden=""></i>
            </div>
            <br></br>
            <h2>DEVOPS</h2>
            <p>Git, GitHub, MySQL</p>
            <br></br>
            <div className='icon'>
              <i className="fa fa-language" aria-hidden=""></i>
            </div>
            <h2>LANGUAGES</h2>
            <p>React, SQL, HTML5, CSS3, JavaScript</p>
            <br></br>
          </div>
        </div>
      </div>
    )
  }
}

export default Achivements
