import React, { Component } from 'react';
import Photo from '../images/container.jpg'
import Calculator from '../images/calculator.png'
import Itunes from '../images/itunesplaylist.png'
import Life from '../images/life-frame.png'
import Play from '../images/train.jpg'


class Portfolio extends Component {
  render() {

    return (
      <div className='port' id='Portfolio'>
        <div className="description2">
          <h1> BRANDING // WEB DESIGN</h1>
          <p>Currently located in Saint Petersburg, Florida, I am happy with my journey as well as being passionate about people, personal development and sustainable living.</p>
          <h1 id="project-title"> Projects </h1>
       </div>

       <div className="portfolio">
         {/* <p>Life-Frame</p> */}
        <a href="https://lifeframe.surge.sh/">
          <img className="itunes" src={Life} />
        </a>
        {/* <p>Calculator</p> */}
        <a href="http://calculator-javi.surge.sh/">
          <img className="calculator" src={Calculator} />
        </a>
        {/* <p>Play-List</p> */}
        <a href="http://playlist-jj.surge.sh/">
          <img className="calculator" src={Play} />
        </a>
        {/* <p>Tunes</p> */}

        <a href="http://ocho-tunes.surge.sh/">
          <img className="itunes" src={Itunes} />
        </a>
      </div>
      </div>
    )
  }
}

export default Portfolio
