import React, { useState } from 'react'
import Navigation from './Components/Navigation'
import HeroSection from './Components/hero-section';
import AboutScroll from './Components/about-scroll';
import Stack from './Components/Stack';
import Projects from './Components/Projects';

function App() {
  
  return (
    <div className='selection:text-white selection:bg-teal-600'>
      
      <Navigation/>
      
      <HeroSection/>
      
      <AboutScroll />

      <Stack />

      <Projects />
    </div>
  )
}

export default App
