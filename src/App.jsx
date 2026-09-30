import Hero from './Hero.jsx'

function AboutMe() {
  // function for generating the moon
  // using midpoint circle algorithm
  function GenerateMoon(r, p) {
    const d = r*2;
    
    const grid = [];
    const row = [];

    // create empty row object
    for (let i = 0; i < d; i++) row.push(" ");

    // deep copy the row object into the grid
    for (let i = 0; i < d; i++) grid.push(JSON.parse(JSON.stringify(row)));

    return true;
  }

  GenerateMoon(10, "bleh");

  return (
    <div></div>
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