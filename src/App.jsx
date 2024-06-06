import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import HeroSection from "./Components/hero-section";
import AboutScroll from "./Components/about-scroll";
import Stack from "./Components/Stack";
import Projects from "./Components/Projects";
import ContactSection from "./Components/Contact-Section";
import FooterSection from "./Components/footer";

function App() {
  return (
    <div className="selection:text-white selection:bg-teal-600">
      

      <Navigation />

      <HeroSection />

      <AboutScroll />

      <Stack />

      <Projects />

      <ContactSection />

      <FooterSection />

    </div>
  );
}

export default App;
