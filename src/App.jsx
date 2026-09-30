import Hero from './Hero.jsx'

function AboutMe() {
  // function for generating the moon
  // using midpoint circle algorithm
  function GenerateFullMoon(r) {
    // make radius odd
    if (r % 2 === 0) r++;

    // radius r means coordinates go from 0 to 2r
    const d = r * 2 + 1;

    const grid = [];
    const row = [];

    for (let i = 0; i < d; i++) {
      row.push(0);
    }

    for (let i = 0; i < d; i++) {
      grid.push([...row]);
    }

    let x = r;
    let y = 0;
    let p = 1 - r;

    // https://en.wikipedia.org/wiki/Midpoint_circle_algorithm
    while (x >= y) {
      for (const [j, k] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
        grid[j * x + r][k * y + r] = 1;
        grid[k * y + r][j * x + r] = 1;
      }

      if (p > 0) {
        x--;
        p += 2 * (y - x) + 1;
      } else {
        p += 2 * y + 1;
      }

      y++;
    }

    return grid;
  }

  function GetPhase() {
    
  }

  GenerateFullMoon(10);

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