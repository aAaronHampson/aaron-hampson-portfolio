import { useEffect } from 'react';
import Hero from './Hero.jsx';
import saturn from './assets/imgs/saturnv.png';

function AboutMe() {
  return (
    <div className="about-container scroll-section">
      <div className="about-col about-experience">
        <h1 className="about-header">Experience</h1>
        <div className="experience-block">
          <h1 className="experience-institution experience-text">University of Exeter</h1>
          <h2 className="experience-title experience-text">Experimentation and Innovation Intern</h2>
          <h3 className="experience-date experience-text">July 2024 - July 2025</h3>
          
        </div>
      </div>
      <div className="about-col about-divider">
        <img src={saturn} className="about-saturn-v"></img>
      </div>
      <div className="about-col about-education">
        <h1 className="about-header">Education</h1>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div></div>
  )
}

function Projects() {
  return (
    <div></div>
  )
}

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
    </>
  )
}

export default App