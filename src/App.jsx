import { useEffect } from 'react';
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
      row.push(" ");
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
        grid[j * x + r][k * y + r] = "#";
        grid[k * y + r][j * x + r] = "#";
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
    // temp function, replace with API call later
    // return percentage, and name
    return [100, "Full"]
  }

  function FillMoon(r, percentage, phase) {
    return false;
  }
  GenerateFullMoon(10);

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
  useEffect(() => {
    // Source - https://stackoverflow.com/a/62392010
    // Posted by user13084463
    // Retrieved 2026-10-01, License - CC BY-SA 4.0

    const sections = document.getElementsByClassName("scroll-section");

    let curSection = 0;
    let lastScrollTop = window.scrollY;
    let isAutoScrolling = false;

    const handleScroll = () => {
      if (isAutoScrolling) return;

      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        curSection++;
      } else if (scrollTop < lastScrollTop) {
        curSection--;
      }

      // clamp index
      curSection = Math.max(
        0,
        Math.min(curSection, sections.length - 1)
      );

      lastScrollTop = scrollTop;

      isAutoScrolling = true;

      sections[curSection].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const handleScrollEnd = () => {
      if (isAutoScrolling) {
        isAutoScrolling = false;
        lastScrollTop = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  return (
    // using a react fragment allows formatting to work
    <>
      <Hero />
      <AboutMe />
      <AboutMe />
    </>
  )
}

export default App