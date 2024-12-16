import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AboutMe = () => {
    const [resume,setResume] = useState(null);
    useEffect(()=>{
        axios.get(`https://script.google.com/macros/s/${process.env.REACT_APP_API_KEY}/exec?function=getResume`)
        .then(response=>{
            const resume = response.data;
            setResume(resume[1]);
        })
        .catch(error=>{
            console.log("There was an error fetching the resume data:", error)
        })
    },[]);
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/aboutmee.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Who I Am...</p>
          <h1 className="skills--section--heading">FullStack Developer</h1>
          <p className="hero--section-description">
            Solution Focused Full-Stack Developer with a strong focus on delivering efficient, high-quality solutions. Skilled in analyzing and solving complex problems while maintaining a commitment to collaboration and continuous learning. Passionate about developing scalable, performance-driven applications with a focus on user experience and usability. Constantly staying up-to-date with the latest technologies, tools, and best practices to build innovative and robust software solutions. Dedicated to writing clean, maintainable code and improving system functionality to meet the needs of both clients and end-users.
          </p>
          <p className="hero--section-description">
          
          </p>
        </div>
        <div>
        <a href={resume} target='_blank'>
            <button className="btn btn-primary"> Resume </button>
        </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe