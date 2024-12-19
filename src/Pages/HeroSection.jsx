import React, { useEffect, useState } from 'react'
import data from "../constants/index.json";
import { FaCode, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import axios from 'axios';

const HeroSection = () => {
  const [resume,setResume] = useState(null);
  useEffect(()=>{
    axios.get(`https://script.google.com/macros/s/${process.env.REACT_APP_API_KEY}/exec?function=getResume`)
    .then(response=>{
      const resumedata = response.data;
      setResume(resumedata[1]);
    })
    .catch(error=>{
      console.log("failed to get resume data",error)
    })
  },[]);
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
        <div className="hero--section--button">
        <a href='#AboutMe'>
            <button className="btn btn-primary">About Me </button>
        </a>
        <a href={resume} target='_blank' rel="noreferrer">
            <button className="btn btn-primary"> Open CV </button>
        </a>
        </div>
        <div>
        </div>
        <div className='hero--section--icons--list'>
          <a href={data.githubLink} target='_blank'  rel="noreferrer"><FaGithub size='25px' className='hero--section--icon' /></a>
          <a href={data.linkedInLink} target='_blank' rel="noreferrer"><FaLinkedin size='25px' className='hero--section--icon' /></a>
          <a href={data.leetcodeLink} target='_blank' rel="noreferrer"><FaCode size='25px' className='hero--section--icon' /></a>
          <a href={data.instagramLink} target='_blank' rel="noreferrer"><FaInstagram size='25px' className='hero--section--icon' /></a>
        </div>
        
        
      </div>
      <div className="hero--section--img">
        <img src="./img/herosection.png" alt="Hero Section" />
      </div>
      
    </section>
  )
}

export default HeroSection