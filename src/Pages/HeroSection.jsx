import React from 'react'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
       
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm <span className='hero--section-title--highlightname'> DANIEL </span> </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Turning <span className='hero--section-title--highlight'>Ideas</span> Into</span>
            <br />
            <span className='hero--section-title--highlight'>Reality</span>
          </h1>
          <p className="hero--section-description">
          Passionate and solution-oriented, I’m a software developer who thrives on finding creative ways to solve problems. I’m always looking for new opportunities to grow, innovate, and make things work better with code
          </p>
        </div>
        <div>
        <a href='#AboutMe'>
            <button className="btn btn-primary">About Me </button>
        </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/herosection.png" alt="Hero Section" />
      </div>
      
    </section>
  )
}

export default HeroSection