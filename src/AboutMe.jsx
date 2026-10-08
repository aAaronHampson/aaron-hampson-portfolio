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
        <ExperienceBlock
          institution="OfficeLabs"
          title="Power Platform Intern"
          date="March 2024 - July 2024"
          text={
            <>
              Independently developed tools for internal usage, including a document templating PowerApp, 
              making use of all features of the Microsoft Power Platform suite.

              <br />
              <br />

              Attended frequent meetings, and authored accurate, well-written handover documentation upon
              reaching project completion.
            </>
          }
          stack={["powerplatform", "powerapps", "powerbi", "powerautomate"]}
        />
      </div>
      <div className="about-col about-divider">
        <img src={saturn} className="about-saturn-v"></img>
      </div>
      <div className="about-col about-education">
        <h1 className="about-header">Education</h1>
          <ExperienceBlock
          institution="Cardiff University"
          title="BSc Applied Software Engineering"
          date="September 2025 - July 2028"
          text={
            <>
              Worked with real industry clients to deliver technical solutions according their to business needs,
              using project management techniques like Agile to effectively and efficiently deliver high-quality software.

              <br />
              <br />

              Achieved a First-class in the first year of the course, and continuing to show strong understanding of software development principles.
            </>
          }
          stack={["git", "kotlin", "java", "spring", "python", "flask", "jquery", "react", "mysql"]}
        />
                  <ExperienceBlock
          institution="Exeter College"
          title="T-Level Digital Production, Design, and Development"
          date="September 2023 - July 2025"
          text={
            <>
              Incorporated data analytics with a full-stack approach, delving into the world of data journalism, business analytics, and big data.

              <br />
              <br />

              Achieved a Distinction for my T-Level classification, and engaged strongly with the technical placements I undertook.
            </>
          }
          stack={["git", "python", "numpy", "pandas", "matplotlib", "flask", "mysql"]}
        />
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
    <hr className="experience-divider"></hr>
    </div>
  );
}

export default AboutMe