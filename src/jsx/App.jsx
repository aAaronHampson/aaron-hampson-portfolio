import { useEffect, useState } from 'react';
import Hero from './Hero.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';

function Contact() {
  return (
    <div></div>
  )
}

function App() {
  return (
    // using a react fragment allows formatting to work
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  )
}

export default App