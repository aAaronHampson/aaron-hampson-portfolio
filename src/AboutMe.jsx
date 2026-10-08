import saturn from './assets/imgs/saturnv.png';

function AboutMe() {
  return (
    <div className="about-container scroll-section">
      <div className="about-col about-experience">
        <h1 className="about-header">Experience</h1>
        <ExperienceBlock
          institution="University of Exeter"
          title="Experimentation and Innovation Intern"
          date="July 2024 - July 2025"
          text={
            <>
              Led a small team of fellow interns delving into exciting new
              technologies, including mixed reality, game-ified experiences,
              and artificial intelligence.

              <br />
              <br />

              Worked with both technical and non-technical users to observe how
              technology could be incorporated into their curriculum.
            </>
          }
          stack={["git", "csharp", "unity"]}
        />
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

// types
// institution: string
// title: string
// date: string
// text: string
// stack: list<string>
function ExperienceBlock({ institution, title, date, text, stack }) {
  return (
    <div className="experience-block">
      <h1 className="experience-institution experience-text">
        {institution}
      </h1>

      <h2 className="experience-title experience-text">
        {title}
      </h2>

      <h3 className="experience-date experience-text">
        {date}
      </h3>

      <p className="experience-p experience-text">
        {text}
      </p>

      <div className="experience-tech-stack">
        {stack.map((tech) => (
          <div
            key={tech}
            className="experience-tech-stack-icon"
            id={`${tech}-icon`}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutMe