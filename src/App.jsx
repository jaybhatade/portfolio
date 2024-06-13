import React, { useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import Navigation from "./Components/Navigation";
import HeroSection from "./Components/hero-section";
import AboutScroll from "./Components/about-scroll";
import Stack from "./Components/Stack";
import Projects from "./Components/Projects";
import ContactSection from "./Components/Contact-Section";
import FooterSection from "./Components/footer";

function App() {
  return (
    <div className=" selection:text-white selection:bg-teal-600">
      {/* <Scrollbars
        style={{ width: "100%", height: "f" }}
        renderThumbVertical={() => <div style={{ backgroundColor: 'rgb(13 148 136)', borderRadius: "25px", zIndex: 99999, position: "relative",cursor: "grab", right:"10px", border:"black 2px solid", width: "12px"}} />}
      > */}

        <Navigation />
        <HeroSection />
        <AboutScroll />
        <Stack />
        <Projects />
        <ContactSection />
        <FooterSection />

      {/* </Scrollbars> */}
    </div>
  );
}

export default App;