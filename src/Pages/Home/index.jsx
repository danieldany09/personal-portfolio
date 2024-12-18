import React from 'react'
import AboutMe from "../AboutMe";
import HeroSection from '../HeroSection';
import MyProjects from '../MyProjects';
import Education from '../Education';
import Experience from '../Experience';

 
 const Home = () => {
   return (
     <>
        <HeroSection/>
        <AboutMe/>
        <MyProjects/>
        <Experience/>
        <Education/>
     </>
   )
 }
 
 export default Home