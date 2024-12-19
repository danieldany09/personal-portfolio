import React from 'react'
import AboutMe from "../AboutMe";
import HeroSection from '../HeroSection';
import MyProjects from '../MyProjects';
import Education from '../Education';
import Experience from '../Experience';
import Contact from '../Contact';

 
 const Home = () => {
   return (
     <>
        <HeroSection/>
        <AboutMe/>
        <MyProjects/>
        <Experience/>
        <Education/>
        <Contact/>
     </>
   )
 }
 
 export default Home