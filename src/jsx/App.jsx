import { useEffect, useState } from 'react';
import Hero from './Hero.jsx';
import AboutMe from './AboutMe.jsx';

function Projects() {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  class Project {
    constructor(name, description, imgs) {
      this.name = name;
      this.description = description;
      this.imgs = imgs;
    }
  }

  // CONSTRUCT PROJECTS & PROJECT ARRAY HERE
  const ratKingRiot = new Project(
    "Rat King Riot", 
    `My submission for the 2025 Game Maker's Tool Kit Game Jam.
    <ul>
    <li>Attained over 1,000 unique visitors during the competition,</li>
    <li>Placed in the top ten most played games,</li>
    <li>Completed in under 48 hours using C# and the Unity Game Engine.</li>
    </ul>`,
    3
  )

  const libreEurope = new Project(
    "Libre Europe Dashboard", 
    `Four week project completed as part of coursework under the Scrum workflow.
    <ul>
    <li>Sucessfully worked as both Scrum Master and Senior Developer,</li>
    <li>Held frequent meetings with clients to assess project requirements,</li>
    <li>Handed over the codebase with appropriate documentation for future development.</li>
    </ul>`,
    3
  )

  const projects = [ratKingRiot, libreEurope]

  useEffect(() => {
    const currentProject = projects[currentProjectIdx];

    //
    document.getElementsByClassName("project-name")[0].innerHTML = currentProject.name;
    document.getElementsByClassName("project-description")[0].innerHTML = currentProject.description;
    document.getElementsByClassName("project-number")[0].innerHTML = `// 0${currentProjectIdx + 1} / 0${projects.length}`;
    
    // to handle images, first clear them
    const carousel = document.getElementsByClassName("project-image-carousel")[0]; 
    carousel.innerHTML = '';
    for (let i = 0; i < currentProject.imgs; i++) {
      let child = document.createElement("img");
      child.src = `project_imgs/${currentProjectIdx}_${i}.png`
      // add an on click to the images to set the currentImageIdx
      child.onclick = () => SetImage(i);
      carousel.appendChild(child);
    };
    setCurrentImageIdx(0);
  }, [currentProjectIdx]);

  useEffect(() => {
    document.getElementsByClassName("project-large-image")[0].src = `project_imgs/${currentProjectIdx}_${currentImageIdx}.png`;
  }, [currentImageIdx, currentProjectIdx]);

  function SetImage(idx) {
    console.log("setting image");
    setCurrentImageIdx(idx);
  }

  function NextProject() {
    let projectIdx = (currentProjectIdx + 1) % projects.length;
    setCurrentProjectIdx(projectIdx);
  }

  function PrevProject() {
    // JS uses remainder operator for % rather than modulo, they're similar but in my case i need modulo
    let projectIdx = (currentProjectIdx - 1) % projects.length;
    if (projectIdx < 0)
    {
      projectIdx += projects.length;
    }
    setCurrentProjectIdx(projectIdx);
  }

  return (
    <div className="project-container scroll-section">
      <button className="project-button" id="previous-project" onClick={PrevProject}>←</button>
      <div className="project">
        <div className="project-col project-txt-col">
          <h1 className="project-number"></h1>
          <h1 className="project-name"></h1>
          <p className="project-description">

          </p>
        </div>
        <div className="project-col project-img-col">
          <img className="project-large-image"/>
          <div className="project-image-carousel">

          </div>
        </div>
      </div>
      <button className="project-button" id="previous-project" onClick={NextProject}>→</button>
    </div>
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
      <Projects />
    </>
  )
}

export default App