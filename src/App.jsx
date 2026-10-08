import { useEffect } from 'react';
import Hero from './Hero.jsx'

function AboutMe() {
  return (
    <div className="about-container scroll-section">
      
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