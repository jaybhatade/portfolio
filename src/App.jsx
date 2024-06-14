import React, { useState, useEffect } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import Navigation from "./Components/Navigation";
import HeroSection from "./Components/hero-section";
import AboutScroll from "./Components/about-scroll";
import Stack from "./Components/Stack";
import Projects from "./Components/Projects";
import ContactSection from "./Components/Contact-Section";
import FooterSection from "./Components/footer";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="app-container">
      {loading? (
        <LoadingScreen className="loading-screen" />
      ) : (
        <div
          className="main-page"
          style={{
            opacity: loading? 0 : 1,
            transition: 'all 2s ease-in-out',
          }}
        >
          <Navigation />
          <HeroSection />
          <AboutScroll />
          <Stack />
          <Projects />
          <ContactSection />
          <FooterSection />
        </div>
      )}
    </div>
  );
}

export default App;