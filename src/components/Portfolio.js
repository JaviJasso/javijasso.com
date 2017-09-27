import React, { Component } from 'react';
import Photo from '../images/container.jpg'

class Portfolio extends Component {
  render() {

    return (
      <div className='port' id='Portfolio'>
        {/* <div className='section2'>
          <p>02 - Portfolio</p>
        </div> */}
        {/* <div className='about'>
           <img src={Photo} alt="profile"/>
         </div> */}
        <div className="description2">
          <h1>JAX STUDIO</h1>
          <h2> BRANDING, WEB DESIGN</h2>
          <p>This is  Jax Studio - Brand Identity. Jax Studio focus container homes and sustainability. </p>
       </div>

      </div>
    )
  }
}

export default Portfolio
