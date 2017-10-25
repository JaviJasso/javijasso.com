import React, { Component } from 'react';
import Photo from '../images/container.jpg'
import Calculator from '../images/calculator.png'
import Itunes from '../images/itunesplaylist.png'


class Portfolio extends Component {
  render() {

    return (
      <div className='port' id='Portfolio'>
        <div className="description2">
          <h1> BRANDING // WEB DESIGN</h1>
          <p>Currently located in Saint Petersburg, Florida, I am proud to represent my Mexican heritage as well as being passionate about people, personal development and sustainable living.</p>
          <h1 id="project-title"> Projects </h1>
       </div>

       <div className="portfolio">
        <a href="https://lifeframe.surge.sh/">
          <img className="calculator" src={Calculator} />
        </a>
        <a href="">
          <img className="calculator" src={Calculator} />
        </a>
        <a href="">
          <img className="calculator" src={Calculator} />
        </a>
        <a href="">
          <img className="itunes" src={Itunes} />
        </a>
      </div>
      </div>
    )
  }
}

export default Portfolio
