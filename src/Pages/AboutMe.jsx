import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact,FaDocker } from 'react-icons/fa';
import { SiNestjs,SiTypescript,SiMongodb,SiGoogleappsscript } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { PiFileSqlLight,PiGraph } from "react-icons/pi";
import { MdOutlineComputer } from "react-icons/md";
import { FaGitAlt } from "react-icons/fa";

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon:  <FaJs/> },
  {name:'TypeScript', icon:<SiTypescript/>},
  { name: 'React', icon: <FaReact /> },
  {name:'Nest.js', icon:<SiNestjs/>},
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Java', icon: <FaJava/>},
  {name:'AppsScript', icon:<SiGoogleappsscript/>},
  { name: 'SQL', icon: <PiFileSqlLight /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  {name:'Redis',icon:<DiRedis/>},
  {name:'Data Structures and algorithms ', icon:<PiGraph/>},
  {name:'System Design ', icon:<MdOutlineComputer/>},
  {name: 'Docker',icon:<FaDocker/>},
  {name:'Git', icon:<FaGitAlt/>},


];
const AboutMe = () => {
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
            Solution Focused Full-Stack Developer with a strong focus on delivering efficient, high-quality solutions. Skilled in analyzing and solving complex problems while maintaining a commitment to collaboration and continuous learning. Constantly staying up-to-date with the latest technologies, tools, and best practices to build innovative and robust software solutions. Dedicated to writing clean, maintainable code and improving system functionality to meet the needs of both clients and end-users.
          </p>
          {/* skills */}
          <h3>Skills</h3>
      <div className="about--me--skills">
      {skills.map((skill, index) => (
         <div key={index} className="about--me--skill--tag">
         {skill.icon} 
         <span className="skill-name">{skill.name}</span> 
       </div>
      ))}
    </div>
          {/* skills */}
        </div>
        
    </div>
    </section>
  )
}

export default AboutMe