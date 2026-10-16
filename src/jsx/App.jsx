import { useEffect, useState } from 'react';
import Hero from './Hero.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';

function Footer() {
  return (
    <div className="contact scroll-section">
      <h2 className="footer-catcher">Like what you see?</h2>
      <h1 className="footer-header">Contact Me</h1>
      <div className="contact-options">
        <button className="email"></button>
        <button className="linkedin"></button>
        <button className="github"></button>
      </div>
    </div>
  )
}

function App() {
  return (
    // using a react fragment allows formatting to work
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  )
}

export default App